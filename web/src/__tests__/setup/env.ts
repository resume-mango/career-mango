import { loadEnvConfig } from "@next/env"

// eslint-disable-next-line import/no-anonymous-default-export
export default async () => {
  loadEnvConfig(process.cwd())
}
