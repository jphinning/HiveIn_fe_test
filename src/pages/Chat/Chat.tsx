import React from "react";
import ChatDrawer from "components/chat/Drawer";
import S from "./style";

function Chat() {
  const items = [
    { jobName: "Job 1", username: "user 1" },
    { jobName: "Job 2", username: "user 2" },
    { jobName: "Job 3", username: "user 3" },
    { jobName: "Job 4", username: "user 4" },
    { jobName: "Job 5", username: "user 5" },
    { jobName: "Job 1", username: "user 1" },
    { jobName: "Job 2", username: "user 2" },
    { jobName: "Job 3", username: "user 3" },
    { jobName: "Job 4", username: "user 4" },
    { jobName: "Job 5", username: "user 5" },
  ];

  return (
    <S.Container>
      <section>
        <ChatDrawer items={items} />
      </section>
      <S.ChatContainer>
        <h1>Chat Here</h1>
      </S.ChatContainer>
    </S.Container>
  );
}

export default Chat;
