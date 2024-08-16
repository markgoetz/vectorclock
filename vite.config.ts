import { defineConfig } from 'vite'
import { inlineSvg } from '@svelte-put/preprocess-inline-svg/vite';
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inlineSvg(
      [
        {
          directories: 'src/assets/icons',
          attributes: {
            class: 'icon',
            width: '120',
            height: '120',
          },
        },
      ],
      {
        inlineSrcAttributeName: 'inline-src',
      },
    ),
    svelte(),
  ],
})
