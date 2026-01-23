# 🅿️ Next.js Domain Parking Template

If you have a domain that you're not using like me, you can use this template to create a simple website that displays the domain for sale. This template includes a contact form that allows users to send messages via email, Slack, and/or Discord. Upon form submission, notifications are sent to all configured channels.

Deploy this template with Vercel, configure the environment variables, and set up your domains to point to the Vercel deployment to start.

You can add multiple domains to the Vercel deployment settings, content will be displayed based on the domain that the user is visiting.

## Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbqst%2Fnextjs-domain-parking-template&env=EMAIL_FROM,EMAIL_TO,RESEND_API_KEY,SLACK_WEBHOOK_URL,DISCORD_WEBHOOK_URL&envDescription=Configure%20at%20least%20one%20notification%20channel%20(Email%2C%20Slack%2C%20or%20Discord)&envLink=https%3A%2F%2Fgithub.com%2Fbqst%2Fnextjs-domain-parking-template%23notification-channels)

Then, setup **Domains** in the Vercel dashboard to point to the deployment.

## Prerequisites

- Node.js
- npm, Yarn, pnpm, or Bun
- At least one notification channel configured (see below)

## Installation

Clone the repository:

```bash
git clone git@github.com:bqst/nextjs-domain-parking-template.git
cd nextjs-domain-parking-template
```

Copy the `.env.example` file to `.env.local` and fill in the required environment variables.

```bash
cp .env.example .env.local
```

### Notification Channels

Configure one or more notification channels. All configured channels will receive notifications in parallel. At least one channel must be configured.

#### Email (Resend) - optional

- `EMAIL_FROM`: The email address that emails will be sent from.
- `EMAIL_TO`: The email address that emails will be sent to.
- `RESEND_API_KEY`: The API key from [Resend](https://resend.com).

#### Slack - optional

- `SLACK_WEBHOOK_URL`: Webhook URL for Slack notifications. [Create a webhook](https://api.slack.com/messaging/webhooks).

#### Discord - optional

- `DISCORD_WEBHOOK_URL`: Webhook URL for Discord notifications. Create one in Server Settings > Integrations > Webhooks.

Then, install and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
