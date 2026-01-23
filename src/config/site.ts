export const siteConfig = {
  // Email (Resend)
  emailFrom: process.env.EMAIL_FROM || "",
  emailTo: [process.env.EMAIL_TO || ""],
  resendApiKey: process.env.RESEND_API_KEY || "",

  // Slack
  slackWebhookUrl: process.env.SLACK_WEBHOOK_URL || "",

  // Discord
  discordWebhookUrl: process.env.DISCORD_WEBHOOK_URL || "",
};

export type SiteConfig = typeof siteConfig;