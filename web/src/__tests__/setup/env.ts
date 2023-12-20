import { loadEnvConfig } from "@next/env"

// eslint-disable-next-line import/no-anonymous-default-export
export default async () => {
  console.log(loadEnvConfig(process.cwd()))
  loadEnvConfig(process.cwd())
}
