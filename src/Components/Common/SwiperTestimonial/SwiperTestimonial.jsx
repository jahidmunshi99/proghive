import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SwiperTestimonial.css";
import "@smastrom/react-rating/style.css";
import ReviewSlide from "./ReviewSlide";
import useFetchData from "../../../Hook/useFetchData";

const SwiperTestimonial = () => {
  const url = "/Testimonial.json"; // JSON must be inside 'public/' folder
  const {data, loading } = useFetchData( url )

  if (loading) {
    return <p className="text-white text-center">Loading reviews...</p>;
  }

  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ type: "fraction" }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <ReviewSlide
            name={item.buyer_name}
            review={item.review}
            img={item.image_url}
            ratting={item.rating}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperTestimonial;
