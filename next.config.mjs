/** @type {import('next').NextConfig} */

const dotenvExpand = require("dotenv-expand");

dotenvExpand.expand({ parsed: { ...process.env } });

const nextConfig = {};

export default nextConfig;
