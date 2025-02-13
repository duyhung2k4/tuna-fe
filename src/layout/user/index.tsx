import React, { Suspense, useEffect, useState } from "react";
import Footer from "./footer";
import NavLinkMobile from "./link_mobile";

import { Drawer, Group, Image, LoadingOverlay, Stack } from "@mantine/core";
import { useOutlet } from "react-router";
import { ObjectRouter, ROUTER } from "@/constants/router";
import { NavLink } from "./link";
import { IconMenu2 } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

import logo from "@/assets/icons/Logo_ Tuna Studio  png-01.png";
import classes from "./styles.module.css";



const UserLayout: React.FC = () => {
  const outlet = useOutlet();
  const [mobileLink, setMobileLink] = useState<boolean>(false);

  const matchScreen = useMediaQuery("(max-width: 1100px)");

  const links: ObjectRouter[] = [
    ROUTER.HOME,
    ROUTER.CONCEPT,
    ROUTER.RENT_COSTUMES,
    // ROUTER.OTHER_SERVICE,
    ROUTER.PRICE_LIST,
    ROUTER.ABOUT,
    ROUTER.CONTACT,
  ]

  useEffect(() => {
    setMobileLink(false);
  }, [window.location.pathname]);



  return (
    <Suspense fallback={<LoadingOverlay />}>
      <Stack w={"100%"} h={"100vh"} gap={0}>
        <Group
          className={classes.header_navbar}
        >
          <Image h={100} src={logo} />
          {
            !matchScreen ?
              <Group gap={16}>
                {
                  links.map((item, i) => <NavLink key={i} info={item} />)
                }
              </Group>
              :
              <IconMenu2
                size={32}
                onClick={() => setMobileLink(true)}
                style={{
                  cursor: "pointer"
                }}
              />
          }
        </Group>

        <Stack className={classes.content}>
          <Stack className={classes.outlet}>
            {outlet}
          </Stack>
          <Footer />
        </Stack>
      </Stack>

      <Drawer
        position="right"
        size="xs"
        styles={{
          content: {
            backgroundColor: "#0C5552",
          },
          header: {
            backgroundColor: "#0C5552",
          },
          close: {
            color: "#000",
          }
        }}
        opened={(matchScreen && mobileLink) || false}
        onClose={() => setMobileLink(false)}
      >
        <Stack

        >
          {
            links.map((item, i) => <NavLinkMobile key={i} info={item} />)
          }
        </Stack>
      </Drawer>
    </Suspense>
  )
}

export default UserLayout;