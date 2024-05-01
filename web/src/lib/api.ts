import configuration from "../../config";

import { getCSRFToken } from "./csrf";

export const apiRequest = async ({
  url,
  method,
  body,
  opts,
}: {
  url: string;
  method: "POST" | "GET" | "DEL" | "PATCH";
  body?: string;
  opts?: { throwErr?: boolean };
}) => {
  const throwErr = opts?.throwErr || false;

  try {
    let headers: Record<string, any> = {
      "Content-Type": "application/json",
    };

    if (method !== "GET") {
      const XSRFToken = await getCSRFToken();
      headers = {
        ...headers,
        "X-CSRF-TOKEN": XSRFToken,
      };
    }

    const res = await fetch(configuration.site.apiUrl + url, {
      method,
      body,
      headers,
      credentials: "include",
    });
    const r = await res.json();
    if (!res.ok) throw r;

    return r;
  } catch (err: any) {
    if (throwErr) throw err;
    return null;
  }
};
