# 🅿️ Next.js Domain Parking Template

If you have a domain that you're not using like me, you can use this template to create a simple website that displays the domain for sale. This template includes a contact form that allows users to send messages via email. Upon form submission, an email is sent using Resend.

Deploy this template with Vercel, configure the environment variables, and set up your domains to point to the Vercel deployment to start.

You can add multiple domains to the Vercel deployment settings, content will be displayed based on the domain that the user is visiting.

## Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbqst%2Fnextjs-domain-parking-template&env=EMAIL_FROM,EMAIL_TO,RESEND_API_KEY&envDescription=Required%20environment%20variables%20for%20the%20Next.js%20Domain%20Parking%20Template&envLink=https%3A%2F%2Fgithub.com%2Fbqst%2Fnextjs-domain-parking-template%23installation)

Then, setup **Domains** in the Vercel dashboard to point to the deployment.

## Prerequisites

- Node.js
- npm, Yarn, pnpm, or Bun
- Resend API Key: An API key from [Resend](https://resend.com) for sending emails.

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

Fill in the following environment variables:

- `EMAIL_FROM`: The email address that emails will be sent from.
- `EMAIL_TO`: The email address that emails will be sent to.
- `RESEND_API_KEY`: The API key from Resend.

Then, install and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
