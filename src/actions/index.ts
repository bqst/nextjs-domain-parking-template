"use server";

import { siteConfig } from "@/config/site";
import { headers } from "next/headers";
import { Resend } from "resend";

export async function sendMessage(prevState: any, formData: FormData) {
  try {
    const host = headers().get("host");
    const rawData = Object.fromEntries(formData.entries());

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data } = await resend.emails.send({
      from: siteConfig.emailFrom,
      to: siteConfig.emailTo,
      subject: `[${host}] New message from the website`,
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