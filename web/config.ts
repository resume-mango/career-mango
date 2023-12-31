const configuration = {
  site: {
    name: "CareerMango",
    title: "CareerMango | Bringing all your Job Hunting needs in one place.",
    description:
      "We offer Resume Reviews, Interview Prep & Career Advice from highly educated industry leaders with 10+ years of HR and recruiting experience",
    themeColor: "#EE3F23",
    siteUrl: process.env.NEXT_PUBLIC_WEB_URL,
    apiUrl: process.env.NEXT_PUBLIC_API_URL + "/v1",
    appUrl: process.env.NEXT_PUBLIC_APP_URL!,

    twitterHandle: "",
    language: "en",
  },
  links: {
    login: `${process.env.NEXT_PUBLIC_AUTH_URL}/login`,
    signup: `${process.env.NEXT_PUBLIC_AUTH_URL}/login?screen=signup`,
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
}

export default configuration
