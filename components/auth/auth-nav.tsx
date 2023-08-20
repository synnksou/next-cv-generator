"use client"

import { useState } from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

interface AuthNavProps {
  items?: NavItem[]
}

export const AuthNav = ({ items }: AuthNavProps) => {
  const [isLogged, setIsLogged] = useState<boolean>(true)
  //add context with logged or not

  return (
    <div className="flex gap-6 md:gap-10">
      {isLogged ? (
        <>
          <Avatar>
            <AvatarImage src="https://media.licdn.com/dms/image/D4E03AQGtdWI0PGhoQg/profile-displayphoto-shrink_400_400/0/1684850914505?e=1698278400&v=beta&t=Xq2SZswDU0pr-o67Ps7EBGPulgWFIDt0xGkuTA9RO58" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </>
      ) : (
        <>
          {items?.length ? (
            <nav className="flex gap-6">
              {items?.map(
                (item, index) =>
                  item.href && (
                    <Link
                      key={index}
                      href={item.href}
                      className={cn(
                        "flex items-center text-sm font-medium text-muted-foreground",
                        item.disabled && "cursor-not-allowed opacity-80"
                      )}
                    >
                      {item.title}
                    </Link>
                  )
              )}
            </nav>
          ) : null}
        </>
      )}
    </div>
  )
}
