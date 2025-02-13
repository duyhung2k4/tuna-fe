import React, { useEffect, useMemo } from "react";

import { listConcept, mapConcept } from "@/constants/concept";
import { AspectRatio, Grid, Image, Stack, Text } from "@mantine/core";
import { useParams } from "react-router";
import { GroupConcept } from "@/components/concept-group";



const DetailConcept: React.FC = () => {
  const { tag } = useParams();

  const groups = useMemo(() => {
    const result = [];
    for (let i = 0; i < listConcept.length; i += 5) {
      result.push(listConcept.slice(i, i + 5));
    }
    return result;
  }, []);

  const concept = useMemo(() => {
    if (!tag) return null;
    return mapConcept[tag];
  }, [tag]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);




  if (!concept) return <></>

  return (
    <Stack>
      <Stack>
        <Text
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: 32,
          }}
        >{concept.name}</Text>
        <Grid>
          {
            concept.imgs.map((item, i) =>
              <Grid.Col
                key={i}
                span={{
                  xl: 3,
                  lg: 4,
                  md: 6,
                }}
              >
                <AspectRatio
                  w={"100%"}
                  ratio={1}
                >
                  <Image
                    w={"100%"}
                    src={item}
                  />
                </AspectRatio>
              </Grid.Col>
            )
          }
        </Grid>
      </Stack>

      <Stack mt={40}>
        <Text
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: 32,
          }}
        >Có thể bạn sẽ quan tâm</Text>
        <Stack>
          {
            groups.map((item, i) =>
              <GroupConcept
                key={i}
                odd={i % 2 === 0}
                concepts={item}
              />
            )
          }
        </Stack>
      </Stack>
    </Stack>
  )
}

export default DetailConcept;