// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://joszaki.github.io',
  base: '/minibrand-terkovezes/',
  output: 'static',
  integrations: [
    tailwind()
  ]
});
