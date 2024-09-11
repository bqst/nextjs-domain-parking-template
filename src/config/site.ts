export const siteConfig = {
  emailFrom: process.env.EMAIL_FROM || "",
  emailTo: [process.env.EMAIL_TO || ""]
}

export type SiteConfig = typeof siteConfig