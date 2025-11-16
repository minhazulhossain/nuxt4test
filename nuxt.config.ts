
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    // ✅ Added session config for nuxt-auth-utils
    session: {
      password: process.env.NUXT_SESSION_PASSWORD || ''
    },

    public: {
      // ✅ Fixed - removed /api/v1/ and trailing slash
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://mumusoadmin.coderdrivelab.com/api/v1/'
    }
  }

})
