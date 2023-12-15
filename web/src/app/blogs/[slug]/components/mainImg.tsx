"use client"
import React from "react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import { useIsMobile } from "@/context/mobile"

const MainImg = ({ url, title }: { url: string; title: string }) => {
  const isMobile = useIsMobile()
  return (
    <AspectRatio ratio={isMobile ? 1 / 1 : 16 / 7}>
      <Image
        src={url}
        alt={title}
        className="overflow-hidden object-cover rounded-2xl bg-lightGray/20"
        fill={true}
      />
    </AspectRatio>
  )
}

export default MainImg
