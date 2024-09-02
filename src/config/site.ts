export const siteConfig = {
  url: process.env.NEXT_PUBLIC_VERCEL_URL || "",
  emailFrom: process.env.EMAIL_FROM || "",
  emailTo: [process.env.EMAIL_TO || ""]
}

export type SiteConfig = typeof siteConfig