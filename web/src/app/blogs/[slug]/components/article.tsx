"use client"
import React, { useEffect, useLayoutEffect } from "react"

const Article = ({ content }: { content: string }) => {
  useEffect(() => {
    const paragraphs = document.querySelectorAll("p")
    console.log(paragraphs)
    paragraphs.forEach(function (paragraph) {
      console.log(paragraph.innerHTML)

      if (paragraph.innerHTML.includes("<br>")) {
        paragraph.style.marginBottom = "0px"
      }
    })
  }, [content])

  return (
    <article
      className="flex-1"
      dangerouslySetInnerHTML={{ __html: content }}
    ></article>
  )
}

export default Article
