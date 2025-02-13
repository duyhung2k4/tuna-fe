import React from "react";

import { Grid, Group, Stack, Text } from "@mantine/core";

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
            <Text>TUNA Studio</Text>
            <Text>Thương hiệu kỷ yếu của thanh xuân.</Text>
            <Text>Nơi lưu giữ tuổi trẻ của bạn trọn đời</Text>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ xl: 3, lg: 4, md: 6 }}>
          <Stack>
            <Text>Liên hệ</Text>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ xl: 3, lg: 4, md: 6 }}>
          <Stack>
            <Text>Facebook Fanpage</Text>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ xl: 3, lg: 4, md: 6 }}>
          <Stack>
            <Text>Bản đồ</Text>
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