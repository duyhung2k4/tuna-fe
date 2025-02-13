import React, { useState } from "react";

import { ObjectRouter, ROUTER } from "@/constants/router";
import { Group, Stack, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useNavigate } from "react-router";

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
          <IconChevronDown onClick={() => setShowChild(!showChild)} />
        }
      </Group>
      <Stack 
        ml={20} 
        gap={8}
        className={showChild ? classes.nav_link_mobile_group_active : classes.nav_link_mobile_group}
      >
        {props.info.childs.map((item, i) =>
          <Text key={i} className={classes.nav_link_mobile_child}>{item.name}</Text>
        )}
      </Stack>
    </Stack>
  )
}

export default NavLinkMobile;