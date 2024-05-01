import Cookies from "universal-cookie";
import { apiRequest } from "./api";

export const getCSRFToken = async () => {
  const cookie = new Cookies();
  let XSRFToken = cookie.get("XSRF-TOKEN");
  if (!XSRFToken) {
    const data = await apiRequest({ url: "/csrf", method: "GET" });
    XSRFToken = data?.token;
  }
  if (!XSRFToken) {
    throw Error("Failed to get CSRF Token");
  }

  return XSRFToken;
};
