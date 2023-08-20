import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Create a beautiful CV in minutes
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Our CV generator makes it easy to create a professional-looking CV
          that stands out from the crowd. With our intuitive interface and
          customizable templates, you can create a CV that showcases your skills
          and experience in just a few clicks.
        </p>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Whether you're a recent graduate or an experienced professional, our
          CV generator has everything you need to create a CV that gets noticed.
          And best of all, it's completely free to use!
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}
