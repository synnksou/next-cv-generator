import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  NEXTAUTH_SECRET,
} from "@/constants"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

import { db } from "../db"

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db),
  secret: NEXTAUTH_SECRET,
  callbacks: {
    async redirect({ baseUrl }) {
      // next add recirection on private pages / projects cv
      return baseUrl
    },
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
}
