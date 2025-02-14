import React from "react";

import { Grid, Group, Stack, Text } from "@mantine/core";
import { IconDeviceMobileFilled, IconMailFilled, IconMapPinFilled, IconPhoneFilled } from "@tabler/icons-react";

import classes from "./styles.module.css";



const Footer: React.FC = () => {
  return (
    <Stack w={"100%"} gap={0}>
      <Group className={classes.footer_top}>
        <Text>
          Kết nối với Tuna trên các nền tảng MXH:
        </Text>
      </Group>
      <Grid className={classes.footer_content}>
        <Grid.Col span={{ xl: 3, lg: 4, md: 6 }}>
          <Stack>
            <Text className={classes.footer_content_title}>TUNA Studio</Text>
            <Text>Thương hiệu kỷ yếu của thanh xuân.</Text>
            <Text>Nơi lưu giữ tuổi trẻ của bạn trọn đời</Text>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ xl: 3, lg: 4, md: 6 }}>
          <Stack>
            <Text className={classes.footer_content_title}>Liên hệ</Text>
            <Group gap={4}>
              <IconMapPinFilled size={20}/>
              <Text>87 Hoàng Quốc Việt, Cầu Giấy, Hà Nội</Text>
            </Group>
            <Group gap={4}>
              <IconMailFilled size={20}/>
              <Text>tunastudio@gmail.com</Text>
            </Group>
            <Group gap={4}>
              <IconPhoneFilled size={20}/>
              <Text>+ 0123456789</Text>
            </Group>
            <Group gap={4}>
              <IconDeviceMobileFilled size={20}/>
              <Text>+ 0123456789</Text>
            </Group>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ xl: 3, lg: 4, md: 6 }}>
          <Stack>
            <Text className={classes.footer_content_title}>Facebook Fanpage</Text>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ xl: 3, lg: 4, md: 6 }}>
          <Stack>
            <Text className={classes.footer_content_title}>Bản đồ</Text>
          </Stack>
        </Grid.Col>
      </Grid>
      <Group
        justify="center"
        className={classes.footer_bottom}
      >
        <Text>© 2024 Copyright: TUNA STUDIO</Text>
      </Group>
    </Stack>
  )
}

export default Footer;