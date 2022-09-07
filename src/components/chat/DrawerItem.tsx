import { UserOutlined } from "@ant-design/icons";
import { Avatar, Typography } from "antd";
import React from "react";
import S from "./style";

interface DrawerItemProps {
  username: string;
  userPictureUrl?: string;
  jobName: string;
}

export default function DrawerItem({
  jobName,
  userPictureUrl,
  username,
}: DrawerItemProps) {
  const { Title, Text } = Typography;
  return (
    <S.DrawerItem>
      <Avatar
        src={userPictureUrl || undefined}
        size={70}
        icon={<UserOutlined />}
      />
      <S.DrawerItemContent>
        <Title level={4}>{username}</Title>
        <Text>{jobName}</Text>
      </S.DrawerItemContent>
    </S.DrawerItem>
  );
}

DrawerItem.defaultProps = {
  userPictureUrl: undefined,
};
