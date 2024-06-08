import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Discount.css";
import { Pagination } from "swiper/modules";
import Discount1 from "../../assets/discount/discount 1.png";
import Discount2 from "../../assets/discount/discount 2.png";
import Discount3 from "../../assets/discount/discount 3.png";

export default function Discount() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        initialSlide={1}
      >
        <SwiperSlide>
          <img src={Discount1} alt="Discount" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Discount2} alt="Discount2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Discount3} alt="Discount3" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
