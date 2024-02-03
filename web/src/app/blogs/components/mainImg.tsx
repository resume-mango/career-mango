"use client"
import React from "react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import { useIsMobile } from "@/context/mobile"

const MainImg = ({ url, title }: { url: string; title: string }) => {
  const isMobile = useIsMobile()
  return (
    <AspectRatio ratio={isMobile ? 1 / 1 : 4 / 3}>
      <Image
        src={url}
        alt={title}
        fill={true}
        className="object-cover object-center overflow-hidden h-[90%] rounded-xl bg-lightGray/30"
      />
    </AspectRatio>
  )
}

export default MainImg
