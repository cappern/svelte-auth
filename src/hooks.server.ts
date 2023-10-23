import { SvelteKitAuth } from "@auth/sveltekit"
import LocalAuth from "@auth/core/providers/credentials"
import GitHub from "@auth/core/providers/github"
import AzureProvider from "@auth/core/providers/azure-ad"
import EmailProvider from "@auth/core/providers/email"
import { GITHUB_ID, GITHUB_SECRET, AZURE_CLIENT_ID, AZURE_CLIENT_SECRET } from "$env/static/private"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "$lib/db.server.js"

export const handle = SvelteKitAuth({
  adapter: PrismaAdapter(db),
  providers: [
    GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
    AzureProvider({
      clientId: AZURE_CLIENT_ID,
      clientSecret: AZURE_CLIENT_SECRET,
      authorization: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
      token: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
      issuer: `https://login.microsoftonline.com/e3e97646-ab6b-4611-87d8-f64dc26e09ac/v2.0`,
      tenantId: process.env.AZURE_AD_TENANT_ID,
  }),
  EmailProvider({
    server: {
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD
      }
    },
    from: process.env.EMAIL_FROM
  })]
  
})
