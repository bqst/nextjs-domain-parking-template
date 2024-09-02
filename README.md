# 🅿️ Next.js Domain Parking Template

This project is a Next.js application designed for a website that displays a domain for sale. It includes a contact form that allows users to send messages via email. Upon form submission, an email is sent using Resend.

## Prerequisites

- Node.js
- npm, Yarn, pnpm, or Bun
- Resend API Key: An API key from [Resend](https://resend.com) for sending emails.

## Installation

Copy the `.env.example` file to `.env.local` and fill in the required environment variables.

```bash
cp .env.example .env.local
```

Fill in the following environment variables:

- `SITE_NAME`: The name of the website.
- `SITE_URL`: The URL of the website.
- `EMAIL_FROM`: The email address that emails will be sent from.
- `EMAIL_TO`: The email address that emails will be sent to.
- `RESEND_API_KEY`: The API key from Resend.

Then, install and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
