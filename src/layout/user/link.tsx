import React, { useState } from "react";

import { Group, Stack, Text } from "@mantine/core";
import { ObjectRouter, ROUTER } from "@/constants/router";
import { useNavigate } from "react-router";
import { IconChevronDown } from "@tabler/icons-react";

import classes from "./styles.module.css";
import textClasses from "@/styles/text.module.css";



export type NavLinkProps = {
  info: ObjectRouter
}

export const NavLink: React.FC<NavLinkProps> = (props) => {
  const navigation = useNavigate();
  const [parentHover, setParentHover] = useState<boolean>(false);
  const [childHover, setChildHover] = useState<boolean>(false);

  const pathname = window.location.pathname;
  const isHref = props.info.href !== ROUTER.HOME.href ? pathname.includes(props.info.href) : pathname === ROUTER.HOME.href;

  // private handle
  const handleNavigation = () => {
    navigation(props.info.href);
  }

  const handleNavigationChild = (tag: string) => {
    setChildHover(false);
    setParentHover(false);
    navigation(`${props.info.href}${tag}`);
  }



  return (
    <Stack
      className={`${classes.nav_link} ${isHref && classes.nav_link_active}`}
      onMouseEnter={() => setParentHover(true)}
      onMouseLeave={() => setParentHover(false)}
      >
      <Group
        onClick={handleNavigation}
        justify="center"
        align="center"
        gap={0}
      >
        <Text>{props.info.name}</Text>
        {props.info.childs.length > 0 && <IconChevronDown size={18} />}
      </Group>

      <Stack
        style={{
          display: parentHover || childHover ? "block" : "none",
          position: "absolute",
          paddingTop: 40,
          marginTop: 25,
          zIndex: 1000,
        }}
        onMouseEnter={() => setChildHover(true)}
        onMouseLeave={() => setChildHover(false)}
      >
        <Stack
          gap={2}
          style={{
            maxHeight: "300px",
            overflow: "hidden",
            overflowY: "scroll",
          }}
        >
          {
            props.info.childs.map((item, i) =>
              <Group
                key={i}
                style={{
                  padding: "8px 24px",
                  textTransform: "uppercase",
                  backgroundColor: "#0C5552",
                }}
                mb={4}
                onClick={() => handleNavigationChild(item.href)}
              >
                <Text className={textClasses.limit_1_line}>{item.name}</Text>
              </Group>
            )
          }
        </Stack>
      </Stack>
    </Stack>
  )
}