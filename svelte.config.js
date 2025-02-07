import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Cloudflare Pages does NOT need a fixed base path
const base = process.env.CF_PAGES ? '' : ''; 

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'public',  // Ensure output directory is "public"
			assets: 'public', // Ensure assets are also in "public"
			fallback: '404.html'
		}),
		paths: {
			base
		}
	}
};

export default config;
