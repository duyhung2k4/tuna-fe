import React, { useMemo } from "react";

import { Group, Stack, Text } from "@mantine/core";
import { IconStarFilled } from "@tabler/icons-react";
import { listConcept } from "@/constants/concept";
import { GroupConcept } from "@/components/concept-group";

import classes from "./styles.module.css";



const Contect: React.FC = () => {
  const groups = useMemo(() => {
    const result = [];
    for (let i = 0; i < listConcept.length; i += 5) {
      result.push(listConcept.slice(i, i + 5));
    }
    return result;
  }, []);



  return (
    <Stack>
      <Group mt={20}>
        <Text className={classes.title}>Concept nổi bật</Text>
        <Text className={classes.content}><span style={{ verticalAlign: "middle" }}><IconStarFilled size={20} /></span> Concept chính là linh hồn của từng buổi chụp, chắc chắn rằng các khách hàng khi đến với Tuna luôn mong muốn tìm cho mình cũng như tập thể những concept phù hợp. Để phục vụ nhu cầu của khách hàng được chu đáo nhất Tuna Studio luôn cập nhật những concept mới, bắt kịp với xu hướng.</Text>
        <Text className={classes.content}><span style={{ verticalAlign: "middle" }}><IconStarFilled size={20} /></span> Đến với Tuna, quý khách hàng sẽ có hàng ngàn lựa chọn phong phú, đa dạng từ concept tươi trẻ, năng động như Thanh xuân Thái Lan, Kỷ yếu Mỹ, Popteen,... Hay những concept nhẹ nhàng như Cổ phục, The Eden, Trà chiều,.... đều sẵn có tại Tuna Yearbook. Đặc biệt nếu bạn có những ý tưởng mới cho concept của chúng mình cũng đừng lo vì với đội ngũ tư vấn dày dặn kinh nghiệm chắc chắn khách hàng của Tuna sẽ không cần phải băn khoăn quá lâu khi lựa chọn concept!</Text>
      </Group>

      <Stack gap={12} mt={40}>
        {
          groups.map((item, i) =>
            <GroupConcept
              key={i}
              odd={i % 2 === 0}
              concepts={item}
            />
          )
        }
      </Stack>
    </Stack>
  )
}

export default Contect;