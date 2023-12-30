import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://phenomenal-klepon-23d2d8.netlify.app/",
  integrations: [preact()]
});