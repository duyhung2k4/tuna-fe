import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel } from "@mantine/carousel";

import im1 from "@/assets/concept/all/image.png";
import im2 from "@/assets/concept/all/image copy.png";
import im3 from "@/assets/concept/all/image copy 2.png";
import im4 from "@/assets/concept/all/image copy 3.png";
import im5 from "@/assets/concept/all/image copy 4.png";

import classes from "./styles.module.css";
import { Image } from "@mantine/core";



export const Carousel1: React.FC = () => {
  const listImg = [im1, im2, im3, im4, im5];

  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <>
      <Carousel
        withIndicators
        height={600}
        className={classes.carousel_1}
        loop
        slideSize="100%"
        align="center"
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {listImg.map((item, i) => (
          <Carousel.Slide key={i} style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
            overflow: "hidden",
            backgroundColor: "#000"
          }}>
            <Image
              src={item}
              fit="cover"
              height={"100%"}
              width="100%"
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  )
}