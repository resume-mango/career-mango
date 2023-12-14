"use client"
import { useIsMobile } from "@/context/mobile"
import Image from "next/image"
import React from "react"

const payments = [
  "/pricing/payments/google-pay.png",
  "/pricing/payments/visa.png",
  "/pricing/payments/mastercard.png",
  "/pricing/payments/american-express.png",
  "/pricing/payments/jcb.png",
  "/pricing/payments/discover.png",
  "/pricing/payments/unionpay.png",
]

const Payments = () => {
  const isMobile = useIsMobile()

  return (
    <div className="w-full mx-auto">
      <h2 className="text-center mb-12 px-6">Accepted Payment Platforms</h2>
      {isMobile ? (
        <div className="overflow-hidden gap-y-6 flex flex-col w-full relative">
          <div className="absolute left-0 w-28 h-full xl:bg-gradient-to-r xl:from-background z-10" />
          <div className="absolute right-0 w-28 h-full xl:bg-gradient-to-l xl:from-background z-10" />
          <div
            className={`relative w-[1800px] flex gap-4 sm:gap-6 m-auto left-0 whitespace-nowrap will-change-transform horizontal-scroll-right`}
          >
            {[...payments, ...payments].map((p, i) => (
              <div key={i} className="w-[140px]">
                <Image src={p} alt="payment icon" width={100} height={40} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex gap-x-4 gap-y-8 justify-center flex-wrap">
          {payments.map((p, i) => (
            <div key={i} className="w-[140px]">
              <Image src={p} alt="payment icon" width={100} height={40} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Payments
