import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://portfolio.plus360.eu/',
    assets: true,
    integrations: [
        sitemap(),
    ],
});
