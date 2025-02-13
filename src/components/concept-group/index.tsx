import React from "react";
import ConceptBox, { ConceptBoxProps } from "@/components/concept-box";

import { Grid } from "@mantine/core";



export type GroupConceptProps = {
  concepts: ConceptBoxProps[];
  odd: boolean
}

export const GroupConcept: React.FC<GroupConceptProps> = (props) => {
  if (props.concepts.length === 1) {
    return (
      <ConceptBox {...props.concepts[0]} />
    )
  }



  return (
    <Grid>
      {!props.odd &&
        <Grid.Col
          span={{
            md: 6,
          }}
        >
          <ConceptBox {...props.concepts[0]} />
        </Grid.Col>
      }
      <Grid.Col
        span={{
          md: 6,
        }}
      >
        <Grid>
          {
            props.concepts.slice(1, props.concepts.length).map((item, i) =>
              <Grid.Col span={6} key={i}>
                <ConceptBox {...item} />
              </Grid.Col>
            )
          }
        </Grid>
      </Grid.Col>
      {props.odd &&
        <Grid.Col
          span={{
            md: 6,
          }}
        >
          <ConceptBox {...props.concepts[0]} />
        </Grid.Col>
      }
    </Grid>
  )
}