const configuration = {
  site: {
    name: "Career Mango",
    description: "",
    themeColor: "#00BB78",
    siteUrl: process.env.NEXT_PUBLIC_WEB_URL,
    siteName: "Lipy AI - Business Assisant",
    twitterHandle: "@LipyAi_",
    language: "en",
  },
  socialLinks: {
    youtube: "",
    instagram: "",
    facbook: "",
    twitter: "",
    linkedin: "",
  },
  support: {
    email: "support@careermango.com",
  },
  blog: {
    maxReadMorePosts: 4,
  },
  production: process.env.NODE_ENV === "production",
};

export default configuration;
