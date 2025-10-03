import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@pinia/nuxt",
    "@vite-pwa/nuxt",
  ],

  pwa: {
    manifest: {
      name: "My Awesome Nuxt App",
      short_name: "NuxtApp",
      description: "A description of my awesome Nuxt app.",
      theme_color: "#ffffff", // Your app's theme color
      icons: [
        {
          src: "pwa-192x192.png", // path to icon in public dir
          sizes: "192x192",
          type: "image/png",
        },
        // {
        //   src: 'pwa-512x512.png', // path to icon in public dir
        //   sizes: '512x512',
        //   type: 'image/png',
        // },
      ],
    },
    workbox: {
      navigateFallback: "/",
      // This will automatically generate a service worker that caches all your assets.
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    devOptions: {
      enabled: true, // Enable PWA functionality in development
      type: "module",
    },
  },

  fonts: {
    defaults: {
      weights: [400, 500, 600],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  // application head
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
      ],
    },
  },
});
