import {
  Box,
  Button,
  Input,
  Flex,
  Spacer,
  Center,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import datajs from "../data.json";
import { useContractWrite, usePrepareContractWrite, useAccount } from "wagmi";
import MyInbox from "./MyInbox";
import { useState, useEffect } from "react";

function SendMessage() {
  const [addressSend, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [args, setArgs] = useState<Array<string | undefined>>([]);
  const [addressError, setAddressError] = useState("");

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
    const input = event.target.value;
    if (/^[a-zA-Z0-9]*$/.test(input)) {
      setAddress(input);
      setAddressError("");
    } else {
      setAddressError("Address must be alphanumeric");
    }
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    setArgs([addressSend, message]);
  }, [addressSend, message]);

  return (
    <Box>
      <FormControl id="address" isRequired isInvalid={!!addressError}>
        <FormLabel>Address</FormLabel>
        <Input
          type="text"
          placeholder="Reciver Address 0x.."
          focusBorderColor={"green.400"}
          value={addressSend}
          onChange={handleAddressChange}
          maxLength={42}
          pattern="^[a-zA-Z0-9]*$"
        />
        <FormErrorMessage>{addressError}</FormErrorMessage>
      </FormControl>
      <Spacer m={5} />
      <FormControl id="message" isRequired>
        <FormLabel>Message</FormLabel>
        <Input
          type="text"
          placeholder="Your Message"
          focusBorderColor={"green.400"}
          value={message}
          onChange={handleMessageChange}
          minLength={1}
          maxLength={150}
          style={{ lineHeight: "1.5", padding: "10px" }}
        />
      </FormControl>
      <Center>
        <Flex mt={5}>
          <Button
            color="white"
            bg="green.400"
            _hover={{ bg: "white", color: "green.400" }}
            mr={3}
            disabled={!addressSend || !message || !!addressError || !write}
            onClick={() => {
              write?.();
            }}
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
