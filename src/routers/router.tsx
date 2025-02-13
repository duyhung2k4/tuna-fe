import React from "react";
import UserLayout from "@/layout/user";

import { ROUTER } from "@/constants/router";
import { Route, Routes } from "react-router";
import { PageAbout, PageConcept, PageContact, PageDetailConcept, PageHome, PageOtherService, PagePriceList, PageRentCostumes } from "./lazy";



const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path={ROUTER.HOME.href} element={<PageHome />} />
        <Route path={ROUTER.CONCEPT.href} element={<PageConcept />} />
        <Route path={`${ROUTER.CONCEPT.href}/:tag`} element={<PageDetailConcept />} />
        <Route path={ROUTER.CONTACT.href} element={<PageContact />} />
        <Route path={ROUTER.ABOUT.href} element={<PageAbout />} />
        <Route path={ROUTER.OTHER_SERVICE.href} element={<PageOtherService />} />
        <Route path={ROUTER.RENT_COSTUMES.href} element={<PageRentCostumes />} />
        <Route path={ROUTER.PRICE_LIST.href} element={<PagePriceList />} />
      </Route>
    </Routes>
  )
}

export default AppRouter;