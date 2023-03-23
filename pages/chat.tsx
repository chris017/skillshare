import styles from "../styles/Home.module.css";
import * as React from "react";
export { React };
import HeaderChat from "../components/HeaderChat";
import SendMessage from "../components/SendMessage";
import { Heading, Container, Flex, Spacer } from "@chakra-ui/react";

function ChatApp() {
  return (
    <div>
      <HeaderChat />
      <Container
        centerContent
        size="lg"
        fontSize="2xl"
        variant={"bold"}
        mt={10}
      >
        <Heading size="2xl" m={5}>
          Skill<span className={styles.gradient}>-Share</span> Chat
        </Heading>
      </Container>
      <Container>
        <SendMessage />
      </Container>
    </div>
  );
}

export default ChatApp;
