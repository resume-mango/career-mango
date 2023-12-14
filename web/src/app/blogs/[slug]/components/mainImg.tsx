"use client"
import React from "react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import { useIsMobile } from "@/context/mobile"

const MainImg = () => {
  const isMobile = useIsMobile()
  return (
    <AspectRatio ratio={isMobile ? 1 / 1 : 16 / 7}>
      <Image
        src={"/example/blog.png"}
        alt="Image"
        className="overflow-hidden object-cover rounded-2xl"
        fill={true}
      />
    </AspectRatio>
  )
}

export default MainImg
