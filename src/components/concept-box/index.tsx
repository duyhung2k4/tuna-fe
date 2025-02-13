import React, { useState } from "react";
import ButtonOutline from "../button-outline";

import { AspectRatio, Box, Stack, Text } from "@mantine/core";

import classes from "./styles.module.css";
import textclasses from "@/styles/text.module.css";
import { useNavigate } from "react-router";
import { ROUTER } from "@/constants/router";



export type ConceptBoxProps = {
  tag: string
  name: string
  imgHref: string
}

const ConceptBox: React.FC<ConceptBoxProps> = (props) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const navigation = useNavigate();

  const handleNavigation = () => {
    navigation(`${ROUTER.CONCEPT.href}/${props.tag}`);
  }



  return (
    <AspectRatio
      w={"100%"}
      ratio={1}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Stack
        gap={0}
        style={{
          backgroundImage: `url(${props.imgHref})`,
        }}
        className={classes.box}
      >
        <Stack className={classes.info} gap={0}>
          <Text className={`${classes.name} ${textclasses.limit_1_line}`}>{props.name}</Text>
          <Box
            style={{
              opacity: isHover ? 1 : 0,
              transform: isHover ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 400ms ease, transform 400ms ease",
            }}
          >
            <ButtonOutline onClick={handleNavigation}>Xem thêm</ButtonOutline>
          </Box>
        </Stack>
      </Stack>
    </AspectRatio>
  )
}

export default ConceptBox;