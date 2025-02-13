export type ObjectRouter = {
  name: string
  href: string
  childs: ObjectRouter[]
}

export type ROUTER_TYPE =
  | "HOME"
  | "ABOUT"
  | "CONTACT"
  | "CONCEPT"
  | "PRICE_LIST"
  | "RENT_COSTUMES"
  | "OTHER_SERVICE"

export const ROUTER: Record<ROUTER_TYPE, ObjectRouter> = {
  HOME: {
    href: "/",
    name: "Trang chủ",
    childs: [],
  },
  ABOUT: {
    href: "/about",
    name: "Về Tuna",
    childs: [],
  },
  CONTACT: {
    href: "/contact",
    name: "Liên hệ",
    childs: [],
  },
  CONCEPT: {
    href: "/concept",
    name: "Concept nổi bật",
    childs: [
      {
        href: "/thanh-xuan-vuon-truong",
        name: "Thanh xuân vườn trường",
        childs: [],
      },
      {
        href: "/wedding",
        name: "Wedding",
        childs: [],
      },
      {
        href: "/su-kien",
        name: "Sự kiện",
        childs: [],
      },
      {
        href: "/couple",
        name: "Couple",
        childs: [],
      },
      {
        href: "/nhom-nhac",
        name: "Nhóm nhạc",
        childs: [],
      }
    ],
  },
  PRICE_LIST: {
    href: "/price-list",
    name: "Bảng giá",
    childs: [],
  },
  RENT_COSTUMES: {
    href: "/rent-costumes",
    name: "Thuê trang phục",
    childs: [],
  },
  OTHER_SERVICE: {
    href: "/other-service",
    name: "Dịch vụ khác",
    childs: [],
  },
}