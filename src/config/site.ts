export const siteConfig = {
  url: process.env.NEXT_PUBLIC_ROOT_DOMAIN || "",
  emailFrom: process.env.EMAIL_FROM || "",
  emailTo: [process.env.EMAIL_TO || ""]
}

export type SiteConfig = typeof siteConfig