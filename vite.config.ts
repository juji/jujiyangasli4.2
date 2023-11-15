import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
// import { SvelteKitPWA } from '@vite-pwa/sveltekit'

export default defineConfig({
	plugins: [
		sveltekit(),
		// SvelteKitPWA({ 
		// 	registerType: 'autoUpdate',
		// 	// injectRegister: 'inline',
		// 	manifest: {
		// 		name: "jujiyangasli",
		// 		short_name: "jujiyangasli",
		// 		description: "Hello, my name is Tri Rahmat Gunadi, and i like to code stuff.",
		// 		background_color: "#000000",
		// 		dir: "ltr",
		// 		display: "fullscreen",
		// 		orientation: "portrait-primary",
		// 		theme_color: "#000000",
		// 		display_override: [
		// 			"standalone",
		// 			"minimal-ui",
		// 			"browser"
		// 		],
		// 		icons:[
		// 			{
		// 				src: '/icons/android-chrome-192x192.png',
		// 				sizes: '192x192',
		// 				type: 'image/png'
		// 			},
		// 			{
		// 				src: '/icons/android-chrome-512x512.png',
		// 				sizes: '512x512',
		// 				type: 'image/png'
		// 			},
		// 			{
		// 				src: '/icons/favicon.svg',
		// 				sizes: "48x48 72x72 96x96 128x128 256x256 512x512",
		// 				type: "image/svg+xml",
		// 				purpose: "any"
		// 			},
		// 			{
		// 				src: '/icons/android-chrome-512x512.png',
		// 				sizes: '512x512',
		// 				type: 'image/png',
		// 				purpose: 'maskable'
		// 			}
		// 		]
		// 	}
		// })
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
