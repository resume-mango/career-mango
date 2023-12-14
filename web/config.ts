const configuration = {
  site: {
    name: "Career Mango",
    description: "",
    themeColor: "#00BB78",
    siteUrl: process.env.NEXT_PUBLIC_WEB_URL,
    apiUrl: process.env.NEXT_PUBLIC_API_URL + "/v1",
    siteName: "Lipy AI - Business Assisant",
    twitterHandle: "@LipyAi_",
    language: "en",
  },
  socialLinks: {
    youtube: "",
    instagram: "",
    facbook: "",
    twitter: "",
    linkedin: "https://www.linkedin.com/company/resumemango",
  },
  support: {
    email: "support@resumemango.com",
  },
  blog: {
    maxReadMorePosts: 4,
  },
  production: process.env.NODE_ENV === "production",
}

export default configuration
