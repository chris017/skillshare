import { Box, Button, Input, Flex, Spacer, Center } from "@chakra-ui/react";
import datajs from "../data.json";
import { useContractWrite, usePrepareContractWrite, useAccount } from "wagmi";
import MyInbox from "./MyInbox";
import { useState } from "react";

function SendMessage() {
  const [addressSend, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [args, setArgs] = useState<Array<string | undefined>>([]);

  const { config } = usePrepareContractWrite({
    address: "0x65e68bDb2227Ab0Fc00b6C4a67bc4b158D997aE3",
    abi: datajs.abi,
    functionName: "sendMessage",
    args: args,
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  const { address, isConnecting, isDisconnected } = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log("Connected", { address, connector, isReconnected });
    },
  });

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSaveClick = () => {
    setArgs([addressSend, message]); // Update the args with the new values
    write?.();
  };

  return (
    <Box>
      <Input
        placeholder="Address"
        value={addressSend}
        onChange={handleAddressChange}
      />
      <Spacer m={5} />
      <Input
        placeholder="Message"
        value={message}
        onChange={handleMessageChange}
      />
      <Center>
        <Flex mt={5}>
          <Button
            color="white"
            bg="green.400"
            _hover={{ bg: "white", color: "green.400" }}
            mr={3}
            disabled={!addressSend || !message}
            onClick={handleSaveClick}
          >
            Save
          </Button>
          <MyInbox />
        </Flex>
      </Center>
    </Box>
  );
}

export default SendMessage;
