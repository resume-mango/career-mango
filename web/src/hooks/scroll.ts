"use client";
import debounce from "debounce";
import React, { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollDirection, setScrollDirection] = useState<"down" | "up" | null>(
    null
  );
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      // Update the previous scroll position
      setPrevScrollPos(currentScrollPos);
    }, 100);

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return { scrollDirection, scrollPos: prevScrollPos };
};

export default useScroll;
