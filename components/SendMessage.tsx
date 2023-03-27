import {
  Box,
  Button,
  Input,
  Flex,
  Spacer,
  Text,
  Center,
  FormControl,
  FormLabel,
  IconButton,
  FormHelperText,
  FormErrorMessage,
  useToast,
  Container,
} from "@chakra-ui/react";
import datajs from "../data.json";
import { Link } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import { useContractWrite, usePrepareContractWrite, useAccount } from "wagmi";
import MyInbox from "./MyInbox";
import { useState, useEffect } from "react";
import { CheckIcon } from "@chakra-ui/icons";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

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
          bg={"white"}
          color={"#09203f"}
          placeholder="Receiver Address 0x.."
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
          bg={"white"}
          color={"#09203f"}
          placeholder="Your Message"
          focusBorderColor={"green.400"}
          value={message}
          onChange={handleMessageChange}
          minLength={1}
          maxLength={150}
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
      <Container mt={5}>
        <Center>
          <Text>
            Feel <span className={styles.gradient}>free</span> to send me a
            message:
          </Text>
        </Center>
      </Container>
      <Container>
        <Center>
          <Text>0xD50516E04B2fBd8da4c09d52e88664e9b47d51bC</Text>
        </Center>
      </Container>
      <Container mt={1}>
        <Center>
          <Text>Contract Address:</Text>
        </Center>
      </Container>
      <Container>
        <Center>
          <Text>
            <Link href="https://mumbai.polygonscan.com/address/0x65e68bDb2227Ab0Fc00b6C4a67bc4b158D997aE3">
              0x65e68bDb2227Ab0Fc00b6C4a67bc4b158D997aE3
            </Link>
          </Text>
        </Center>
      </Container>
      <Container as="footer">
        <Center>
          <Box m="5">
            <Link href="https://www.linkedin.com/in/christian-schmid-8b4b1b16a/">
              <IconButton
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                size="md"
                variant="ghost"
                _hover={{ bg: "white", color: "green.400" }}
                mr="2"
              />
            </Link>
            <Link href="https://github.com/chris017">
              <IconButton
                aria-label="Github"
                icon={<FaGithub />}
                size="md"
                variant="ghost"
                _hover={{ bg: "white", color: "green.400" }}
                mr="2"
              />
            </Link>
            <Link href="https://twitter.com/Chris120321">
              <IconButton
                aria-label="Twitter"
                icon={<FaTwitter />}
                size="md"
                variant="ghost"
                _hover={{ bg: "white", color: "green.400" }}
              />
            </Link>
          </Box>
        </Center>
      </Container>
    </Box>
  );
}

export default SendMessage;
