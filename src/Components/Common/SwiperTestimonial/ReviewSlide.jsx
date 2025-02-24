import React from "react";
import { Rating } from "@smastrom/react-rating";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SwiperTestimonial.css";
import "@smastrom/react-rating/style.css";

const ReviewSlide = ({ img, name, review, ratting }) => {
  return (
    <div className="text-white flex flex-col justify-center items-center">
      <div className="w-20 h-20">
        <img className="rounded-full" src={img} alt={name} />
      </div>
      <div className="pt-4 pb-2 text-lg font-bold">{name}</div>
      <p className="text-center">{review}</p>
      {/** Ratings */}
      <div className="rating mt-5">
        <Rating style={{ maxWidth: 100 }} value={ratting} readOnly />
      </div>
    </div>
  );
};

export default ReviewSlide;
