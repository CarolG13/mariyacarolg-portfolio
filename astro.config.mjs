import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://mariya-portfolio.example.com', // <-- ADD THIS LINE
  integrations: [tailwind()]
});
