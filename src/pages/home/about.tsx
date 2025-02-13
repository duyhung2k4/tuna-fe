import React from "react";

import { AspectRatio, Grid, Stack, Text } from "@mantine/core";

import classes from "./styles.module.css";



const About: React.FC = () => {
  return (
    <Grid w={"100%"} mt={100}>
      <Grid.Col span={{
        lg: 5,
        xs: 12,
      }}>
        <Stack className={classes.about} gap={16}>
          <Text
            style={{
              fontSize: 32,
              textTransform: "uppercase"
            }}
          >Về Tuna</Text>
          <Text
            style={{
              textAlign: "justify"
            }}
          >
            06 NĂM KINH NGHIỆM trong lĩnh vực kỷ yếu. Hơn 30 photographers được đào tạo chuyên nghiệp và sáng tạo. Là một trong những studio trong lĩnh vực kỷ yếu top đầu của cả nước.
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={{
        lg: 7,
        xs: 12,
      }}>
        <AspectRatio w={"100%"} ratio={7 / 4}>
          <iframe
            style={{
              width: "100%",
            }}
            src="https://www.youtube.com/embed/Jy2JcPrPZTc?si=ED6XAcJxQy7MdzDn"
            title="Tuna Video"
          // frameBorder="0"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </AspectRatio>
      </Grid.Col>
    </Grid>
  )
}

export default About;