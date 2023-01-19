import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WoodBridge from "../images/WoodbridgeAreaInfo.svg";
import { Carousel } from "react-responsive-carousel";

const HotspotCarousel = () => {
  const [hotspots, setHotspots] = useState([]);

  useEffect(() => {
    setHotspots();
  });
  return (
    <Carousel autoPlay interval="5000" axis="horizontal" infiniteLoop>
      <div>
        <img src={WoodBridge} alt="photo" />
        <p className="legend">
          WOODBRIDGE <br />
          CAFE
        </p>
      </div>
      <div>
        <img src={WoodBridge} alt="photo" />
        <p className="legend">
          WOODBRIDGE <br />
          CAFE
        </p>
      </div>
      <div>
        <img src={WoodBridge} alt="photo" />
        <p className="legend">
          WOODBRIDGE <br />
          CAFE
        </p>
      </div>
    </Carousel>
  );
};

export default HotspotCarousel;
