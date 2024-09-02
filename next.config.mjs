/** @type {import('next').NextConfig} */

import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

// Load and expand the environment variables
dotenvExpand.expand(dotenv.config());

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
