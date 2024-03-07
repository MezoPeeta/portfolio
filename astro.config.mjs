import { defineConfig } from 'astro/config';
import vercelServerless  from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  output: 'server',
  adapter: vercelServerless(),

});