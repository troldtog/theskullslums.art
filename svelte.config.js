import adapter from '@sveltejs/adapter-static'; //'svelte-adapter-firebase';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        csrf: {
            checkOrigin: false
        }
    },
    preprocess: [
        vitePreprocess({
            postcss: true
        })
    ],
    env: {
        dir: './env'
    }
};

export default config;
