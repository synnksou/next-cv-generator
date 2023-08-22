import { DRIZZLE_DATABASE_URL } from "@/constants"
import { neon, neonConfig } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

neonConfig.fetchConnectionCache = true

const sql = neon(DRIZZLE_DATABASE_URL!)

export const db = drizzle(sql)
export type DBCLIENT = typeof db
