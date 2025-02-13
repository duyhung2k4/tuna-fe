import React from "react";
import ConceptBox from "@/components/concept-box";

import { Grid, Group, Stack, Text } from "@mantine/core";
import { listConcept } from "@/constants/concept";
import { IconChevronRight } from "@tabler/icons-react";

import classes from "./styles.module.css";



export const BestConcept: React.FC = () => {
  return (
    <Stack>
      <Stack align="center" gap={0} mt={40}>
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
          }}
        >CONCEPT NỔI BẬT</Text>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
          }}
        >Một số concept nổi bật của Tuna Studio</Text>
      </Stack>

      <Grid>
        {
          listConcept.map((item) =>
            <Grid.Col
              key={item.tag}
              span={{
                xl: 4,
                lg: 4,
                md: 6,
                sm: 12,
                xs: 12,
              }}
            >
              <ConceptBox
                {...item}
              />
            </Grid.Col>
          )
        }
      </Grid>

      <Group 
        justify="center" 
        gap={4} 
        align="center"
        style={{
          cursor: "pointer",
        }}
      >
        <Text
          className={classes.more}
        >Xem thêm</Text>
        <IconChevronRight />
      </Group>
    </Stack>
  )
}