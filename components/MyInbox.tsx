import {
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { useContractRead, useAccount } from "wagmi";
import datajs from "../data.json";

function MyInbox() {
  const { address, isConnecting, isDisconnected } = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log("Connected", { address, connector, isReconnected });
    },
  });

  const { data: messages } = useContractRead({
    address: "0x65e68bDb2227Ab0Fc00b6C4a67bc4b158D997aE3",
    abi: datajs.abi,
    functionName: "getMessagesForAddress",
    args: [address],
  });

  const { isOpen: is, onOpen: on, onClose: off } = useDisclosure();
  return (
    <Box>
      <Button
        size="md"
        color="white"
        bg="green.400"
        _hover={{ bg: "white", color: "green.400" }}
        onClick={on}
      >
        My Inbox
      </Button>
      <Drawer isOpen={is} placement="bottom" onClose={off} isFullHeight={false}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader bg={"#09203f"}>My Inbox</DrawerHeader>
            <DrawerBody bg={"#09203f"}>
              {Array.isArray(messages) ? (
                <ul>
                  {messages.map((message, index) => (
                    <li key={index}>
                      Message: {message.message}
                      <br></br>Sender: {message.sender}
                      <br></br>
                      <Divider orientation="horizontal" />
                    </li>
                  ))}
                </ul>
              ) : (
                <div color="white">
                  No messages found.<br></br>Please make sure you are connected
                  to your Walltet.
                </div>
              )}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

export default MyInbox;
