import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HotspotCard from "./HotspotCard";
import WoodBridge from "../images/WoodbridgeAreaInfo.svg";

import { Navigation, Pagination, Scrollbar } from "swiper";

import styles from "../sass/hotspotcarousel.module.scss";
import "swiper/css/navigation";
import "swiper/css";

const HotspotCarousel = ({ cityHotspot }) => {
  return (
    <div className={styles.slider_container}>
      <div className={styles.slider}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          breakpoints={{
            340: {
              // when window width is >= 340px
              width: 200,
              slidesPerView: 1,
            },
            768: {
              // when window width is >= 768px
              width: 768,
              slidesPerView: 3,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {cityHotspot.map((city) => {
            return (
              <SwiperSlide>
                <HotspotCard hotspot={city} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HotspotCarousel;
