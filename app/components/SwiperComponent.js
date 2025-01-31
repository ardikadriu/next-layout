"use client";
import Image from "next/image";
import image1 from "@/public/image1.jpg";
import image2 from "@/public/image2.jpg";
import image3 from "@/public/image3.jpg";
import image4 from "@/public/image4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
const SwiperComponents = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      navigation={true}
      pagination={{ clicable: true }}
      scrollbar={{ draggable: true }}
      className="w-full hover:cursor-pointer "
      loop={true}
      modules={[Pagination, Navigation]}
      style={{
        "--swiper-navigation-color": "#000",
        "--swiper-pagination-color": "#000",
      }}
    >
      <SwiperSlide>
        <Image
          className="object-fill w-full"
          src={image1}
          width={400}
          height={400}
          alt="idk"
        />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="object-cover w-full"
          src={image2}
          width={400}
          height={400}
          alt="idk"
        />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="object-fill w-full h-full"
          src={image3}
          width={400}
          height={400}
          alt="idk"
        />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="object-contain w-full "
          src={image4}
          width={400}
          height={400}
          alt="idk"
        />{" "}
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponents;
