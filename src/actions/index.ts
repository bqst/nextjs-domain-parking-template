"use server";

import { siteConfig } from "@/config/site";
import { headers } from "next/headers";
import { Resend } from "resend";

type NotificationResult = {
  channel: string;
  success: boolean;
  error?: string;
};

type FormDataRecord = Record<string, FormDataEntryValue>;

function formatMessage(host: string, data: FormDataRecord): string {
  return Object.entries(data)
    .map(([key, value]) => `• ${key}: ${value}`)
    .join("\n");
}

async function sendEmail(
  host: string,
  data: FormDataRecord
): Promise<NotificationResult> {
  if (!siteConfig.resendApiKey || !siteConfig.emailFrom || !siteConfig.emailTo[0]) {
    return { channel: "email", success: false, error: "Not configured" };
  }

  try {
    const resend = new Resend(siteConfig.resendApiKey);

    await resend.emails.send({
      from: siteConfig.emailFrom,
      to: siteConfig.emailTo,
      subject: `[${host}] New message from the website`,
      html:
        "<ul>" +
        Object.entries(data)
          .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
          .join("") +
        "</ul>",
    });

    return { channel: "email", success: true };
  } catch (error) {
    return {
      channel: "email",
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

async function sendSlack(
  host: string,
  data: FormDataRecord
): Promise<NotificationResult> {
  if (!siteConfig.slackWebhookUrl) {
    return { channel: "slack", success: false, error: "Not configured" };
  }

  try {
    const message = formatMessage(host, data);

    const response = await fetch(siteConfig.slackWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        blocks: [
          {
            type: "header",
            text: {
              type: "plain_text",
              text: `📬 New message from ${host}`,
              emoji: true,
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: message,
            },
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Slack responded with ${response.status}`);
    }

    return { channel: "slack", success: true };
  } catch (error) {
    return {
      channel: "slack",
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

async function sendDiscord(
  host: string,
  data: FormDataRecord
): Promise<NotificationResult> {
  if (!siteConfig.discordWebhookUrl) {
    return { channel: "discord", success: false, error: "Not configured" };
  }

  try {
    const fields = Object.entries(data).map(([key, value]) => ({
      name: key,
      value: String(value) || "-",
      inline: true,
    }));

    const response = await fetch(siteConfig.discordWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title: `📬 New message from ${host}`,
            color: 0x5865f2,
            fields,
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Discord responded with ${response.status}`);
    }

    return { channel: "discord", success: true };
  } catch (error) {
    return {
      channel: "discord",
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

type SendMessageState = {
  data: { results: NotificationResult[] } | null;
  error?: string;
  results?: NotificationResult[];
} | null;

export async function sendMessage(
  _prevState: SendMessageState,
  formData: FormData
): Promise<SendMessageState> {
  const host = (await headers()).get("host") || "unknown";
  const rawData = Object.fromEntries(formData.entries());

  // Send to all configured channels in parallel
  const results = await Promise.all([
    sendEmail(host, rawData),
    sendSlack(host, rawData),
    sendDiscord(host, rawData),
  ]);

  // Check if at least one configured channel succeeded
  const configuredResults = results.filter((r) => r.error !== "Not configured");
  const successCount = configuredResults.filter((r) => r.success).length;

  // If no channels are configured, that's an error
  if (configuredResults.length === 0) {
    return {
      data: null,
      error: "No notification channels configured",
    };
  }

  // If at least one channel succeeded, consider it a success
  if (successCount > 0) {
    return {
      data: { results },
    };
  }

  // All configured channels failed
  return {
    data: null,
    error: "All notification channels failed",
    results,
  };
}
