import React from "react";
import DrawerItem from "./DrawerItem";
import S from "./style";

interface DrawerItemType {
  username: string;
  userPictureUrl?: string;
  jobName: string;
}

interface ChatDrawerProps {
  items: DrawerItemType[];
}

export default function ChatDrawer({ items }: ChatDrawerProps) {
  return (
    <S.Drawer>
      {items.map(({ jobName, username, userPictureUrl }) => (
        <DrawerItem
          jobName={jobName}
          username={username}
          userPictureUrl={userPictureUrl}
        />
      ))}
    </S.Drawer>
  );
}
