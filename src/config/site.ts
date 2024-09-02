export const siteConfig = {
  name: process.env.SITE_NAME || "",
  url: process.env.SITE_URL || "",
  emailFrom: process.env.EMAIL_FROM || "",
  emailTo: [process.env.EMAIL_TO || ""]
}

export type SiteConfig = typeof siteConfig