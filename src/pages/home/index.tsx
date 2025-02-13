import React from "react";
import About from "./about";

import { Stack } from "@mantine/core";
import { Carousel1 } from "./carousel_1";
import { BestConcept } from "./best_concept";



const Home: React.FC = () => {
  return (
    <Stack
      style={{
        borderRadius: "8px",
      }}
    >
      <Carousel1 />
      <BestConcept />
      <About/>
    </Stack>
  );
};

export default Home;
