// @ts-check
import { defineConfig } from "astro/config"

import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [react()],
  adapter: netlify(),
})