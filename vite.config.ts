import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

const truthyPreviewValues = new Set(['true', '1', 'yes', 'on']);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isPreview = truthyPreviewValues.has(String(env.PREVIEW ?? '').trim().toLowerCase());

  return {
    plugins: [vue()],
    define: {
      __APP_PREVIEW__: JSON.stringify(isPreview)
    },
    server: {
      host: '0.0.0.0',
      port: 5173
    }
  };
});
