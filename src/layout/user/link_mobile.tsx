import React, { useState } from "react";

import { ObjectRouter, ROUTER } from "@/constants/router";
import { Group, Stack, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

import classes from "./styles.module.css";



export type NavLinkMobileProps = {
  info: ObjectRouter
}

const NavLinkMobile: React.FC<NavLinkMobileProps> = (props) => {
  const [showChild, setShowChild] = useState<boolean>(false);

  const navigation = useNavigate();

  const pathname = window.location.pathname;
  const isHref = props.info.href !== ROUTER.HOME.href ? pathname.includes(props.info.href) : pathname === ROUTER.HOME.href;

  const handleNavigation = () => {
    navigation(props.info.href);
  }

  const handleNavigationChild = (tag: string) => {
    navigation(`${props.info.href}${tag}`);
  }



  return (
    <Stack>
      <Group
        className={`${classes.nav_link_mobile}`}
        justify="space-between"
        align="center"
      >
        <Text
          onClick={handleNavigation}
          className={`${isHref && classes.nav_link_active}`}
        >{props.info.name}</Text>
        {
          props.info.childs.length > 0
          &&
          <motion.div
            initial={{ transform: "rotate(0deg)" }}
            animate={{ transform: `rotate(${showChild ? 180 : 0}deg)` }}
            transition={{ duration: 0.2 }}
          >
            <IconChevronDown onClick={() => setShowChild(!showChild)} />
          </motion.div>
        }
      </Group>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: showChild ? "auto" : 0, opacity: showChild ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <Stack
          ml={20}
          gap={8}
        >
          {props.info.childs.map((item, i) => (
            <Text
              key={i}
              onClick={() => handleNavigationChild(item.href)}
              className={classes.nav_link_mobile_child}
            >
              {item.name}
            </Text>
          ))}
        </Stack>
      </motion.div>
    </Stack>
  )
}

export default NavLinkMobile;