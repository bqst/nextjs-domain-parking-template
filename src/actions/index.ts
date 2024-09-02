"use server";

import { siteConfig } from "@/config/site";
import { Resend } from "resend";

export async function sendMessage(prevState: any, formData: FormData) {
  try {
    const rawData = Object.fromEntries(formData.entries());

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data } = await resend.emails.send({
      from: siteConfig.emailFrom,
      to: siteConfig.emailTo,
      subject: `[${siteConfig.name}] New message from the website`,
      html:
        "<ul>" +
        Object.entries(rawData)
          .map(([key, value]) => `<li>${key}: ${value}</li>`)
          .join("") +
        "</ul>",
    });

    return { ...prevState, data };
  } catch (error) {
    throw new Error("Failed to send message");
  }
}