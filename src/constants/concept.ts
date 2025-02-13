import { ConceptBoxProps } from "@/components/concept-box";

import im1 from "@/assets/concept/all/image.png";
import im2 from "@/assets/concept/all/image copy.png";
import im3 from "@/assets/concept/all/image copy 2.png";
import im4 from "@/assets/concept/all/image copy 3.png";
import im5 from "@/assets/concept/all/image copy 4.png";

export const listConcept: ConceptBoxProps[] = [
  {
    name: "Thanh xuân vườn trường",
    tag: "thanh-xuan-vuon-truong",
    imgHref: im1,
  },
  {
    name: "Wedding",
    tag: "wedding",
    imgHref: im2,
  },
  {
    name: "Sự kiện",
    tag: "su-kien",
    imgHref: im3,
  },
  {
    name: "Couple",
    tag: "couple",
    imgHref: im4,
  },
  {
    name: "Nhóm nhạc",
    tag: "nhom-nhac",
    imgHref: im5,
  },
]

export type ConceptType = {
  name: string
  tag: string
  imgs: string[],
}
export const mapConcept: Record<string, ConceptType> = {
  "thanh-xuan-vuon-truong": {
    name: "Thanh xuân vườn trường",
    tag: "thanh-xuan-vuon-truong",
    imgs: [im1, im2, im3, im4, im5],
  },
  "wedding": {
    name: "Wedding",
    tag: "wedding",
    imgs: [im1, im2, im3, im4, im5],
  },
  "su-kien": {
    name: "Sự kiện",
    tag: "su-kien",
    imgs: [im1, im2, im3, im4, im5],
  },
  "couple": {
    name: "Couple",
    tag: "couple",
    imgs: [im1, im2, im3, im4, im5],
  },
  "nhom-nhac": {
    name: "Nhóm nhạc",
    tag: "nhom-nhac",
    imgs: [im1, im2, im3, im4, im5],
  },
};