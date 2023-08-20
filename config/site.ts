export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  authNav: [
    {
      title: "Sign in",
      href: "/signin",
    },
    {
      title: "Sign up",
      href: "/signup",
    },
  ],
  links: {
    twitter: "https://twitter.com/toinouux",
    github: "https://github.com/synnksou",
  },
}
