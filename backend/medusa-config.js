import { loadEnv, defineConfig } from '@medusajs/utils'

loadEnv(process.env.NODE_ENV, process.cwd())

const plugins = [
  'medusa-fulfillment-manual',
  {
    resolve: '@medusajs/admin',
    /** @type {import('@medusajs/admin').PluginOptions} */
    options: {
      path: '/dashboard',
    },
  }
]

/** @type {import('@medusajs/medusa').ConfigModule["projectConfig"]} */
const projectConfig = {
  admin_cors: process.env.ADMIN_CORS,
  auth_cors: process.env.AUTH_CORS,
  store_cors: process.env.STORE_CORS,
  jwtSecret: process.env.JWT_SECRET,
  cookieSecret: process.env.COOKIE_SECRET,
  redis_url: process.env.REDIS_URL,
  database_url: process.env.DATABASE_URL,
  database_type: 'postgres',
};

export default defineConfig({
  projectConfig,
  plugins,
  modules: {},
  featureFlags: {
    medusa_v2: true
  },
})