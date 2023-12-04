"use client";
import { cn } from "@/lib/utils";
import React, { useLayoutEffect } from "react";
import { buttonVariants } from "../ui/button";
import ReactPaginate from "react-paginate";
import Icons from "../icons";
import { useIsMobile } from "@/context/mobile";

const Pagination = ({
  currentPage,
  totalCount,
}: {
  currentPage: number;
  totalCount: number;
}) => {
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    if (!isMobile) return;
    const container = document.getElementsByClassName("paginator")[0];
    const prev = document.getElementsByClassName("prev-btn")[0];
    const next = document.getElementsByClassName("next-btn")[0];
    console.log(prev, next);
    if (!container || !prev || !next) return;
    container.removeChild(prev);
    container.insertBefore(prev, next);
  }, [isMobile]);

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-8 items-center justify-center w-full">
          <ReactPaginate
            breakLabel="..."
            previousLabel={
              <span className="flex items-center gap-2 [&:hover>svg]:stroke-primary">
                <Icons.arrow className="w-5 h-5 rotate-180" /> Previous
              </span>
            }
            nextLabel={
              <span className="flex justify-end items-center gap-2 [&:hover>svg]:stroke-primary">
                Next <Icons.arrow className="w-5 h-5" />
              </span>
            }
            onPageChange={() => console.log("click")}
            pageRangeDisplayed={3}
            marginPagesDisplayed={isMobile ? 1 : 3}
            pageCount={totalCount}
            initialPage={currentPage}
            renderOnZeroPageCount={null}
            containerClassName="paginator flex gap-6 items-center w-full flex-wrap justify-center"
            previousClassName={`prev-btn ${isMobile ? "w-[46%]" : "flex-1"}`}
            nextClassName={`next-btn ${isMobile ? "w-[40%]" : "flex-1"}`}
            activeClassName={cn(buttonVariants({ size: "icon" }))}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
