"use client"
import { useIsMobile } from "@/context/mobile"
import React from "react"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"

const reviews = [
  {
    title: "Careermango has been a game-changer for me!",
    description:
      "The resume builder and job search engine helped me find my dream job in no time. The platform is user-friendly, and the customer support team is incredibly helpful. I highly recommend Careermango to anyone looking to level up their career. Thank you!",
    customer: "Sarah R.",
    ratings: 5,
  },
  {
    title:
      "I was struggling to find job opportunities that matched my skills and experience.",
    description:
      "But then I discovered Careermango, and everything changed. The tailored job search engine and comprehensive resources helped me secure multiple interviews and eventually land a fantastic job. Careermango truly exceeded my expectations!",
    customer: "Mark L.",
    ratings: 5,
  },
  {
    title: "I'm so glad I found Careermango.",
    description:
      "The resume builder made it easy for me to create a professional and polished resume that caught the attention of employers. The job search engine provided a wide range of opportunities, and the tips and advice section was invaluable. Thanks to Careermango, I'm now happily employed in my desired field.",
    customer: "Rodrigo M.",
    ratings: 5,
  },
]

const fiveStar = [...Array(5)].map((_, i) => (
  <svg
    key={i}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      stroke="none"
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill="#F6D604"
    />
  </svg>
))

const Single = ({ review }: { review: (typeof reviews)[0] }) => {
  return (
    <div className="space-y-4" data-testid="testimonial">
      <div className="flex space-x-1">{fiveStar}</div>
      <h4>{review.title}</h4>
      <p>{review.description}</p>
      <p className="text-gray">{review.customer}</p>
    </div>
  )
}

const Reviews = () => {
  const isMobile = useIsMobile()
  return (
    <div className="space-y-12 px-6 xl:p-0">
      <h2 className="max-w-2xl">
        Embraced and Trusted by the Global Community
      </h2>

      <div>
        {isMobile ? (
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: "#paginator",
            }}
          >
            {reviews.map((review, k) => (
              <SwiperSlide key={k}>
                <Single review={review} />
              </SwiperSlide>
            ))}

            <div
              id="paginator"
              className="mt-8 mb-4 flex gap-2 justify-center"
            ></div>
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 my-24">
            {reviews.map((review, k) => (
              <Single review={review} key={k} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Reviews
