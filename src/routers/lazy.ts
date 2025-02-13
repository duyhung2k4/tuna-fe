import { lazy } from "react";

export const PageHome = lazy(() => import("@/pages/home"));
export const PageAbout = lazy(() => import("@/pages/about"));
export const PageConcept = lazy(() => import("@/pages/concept"));
export const PageContact = lazy(() => import("@/pages/contact"));
export const PagePriceList = lazy(() => import("@/pages/price-list"));
export const PageRentCostumes = lazy(() => import("@/pages/rent-costumes"));
export const PageOtherService = lazy(() => import("@/pages/other-service"));
export const PageDetailConcept = lazy(() => import("@/pages/detail-concept"));