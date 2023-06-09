import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useContractRead, UseContractConfig } from "wagmi";
import config from "../data.json";
import { Link } from "@chakra-ui/react";
import {
  Heading,
  Text,
  Button,
  ButtonGroup,
  Box,
  ChakraProvider,
  VStack,
  Container,
  Flex,
  Spacer,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  Divider,
  Center,
  IconButton,
  AbsoluteCenter,
  UnorderedList,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Home: NextPage = () => {
  const [started, setStarted] = useState(false);
  const router = useRouter();

  const handleGetStarted = () => {
    setStarted(true);
    router.push("/chat");
  };

  return (
    <div>
      <Box>
        <Head>
          <title>Skill-Share</title>
          <meta content="" name="" />
          <link href="/favicon.ico" rel="icon" />
        </Head>
        <Flex>
          <Box m="5">
            <Heading size={"lg"}>
              Skill<span className={styles.gradient}>-Share</span>
            </Heading>
          </Box>
          <Spacer />
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
        </Flex>
        <Box mt={10}>
          <Center>
            <Heading size="3xl" m={5}>
              Welcome to Skill<span className={styles.gradient}>-Share</span>
            </Heading>
          </Center>
          <Container
            centerContent
            size="lg"
            fontSize="2xl"
            variant={"bold"}
            mb={5}
          >
            <Box>
              Skill<span className={styles.gradient}>-Share</span> is a
              decentralized application that allows users to exchange skills
              with each other in a{" "}
              <span className={styles.gradient}>peer-to-peer</span> manner. The
              dApp can be used to{" "}
              <span className={styles.gradient}>connect</span> users with
              complementary skills and facilitate skill
              <span className={styles.gradient}>-sharing</span> and learning.
            </Box>
          </Container>
          <Center>
            <Button
              size="md"
              color="white"
              height="48px"
              width="200px"
              mb={5}
              onClick={() => router.push("/chat")}
              bg="linear-gradient(140deg, rgb(127, 198, 179) 0%, rgb(48, 245, 90) 100%)"
              _hover={{ bg: "white", color: "green.400" }}
            >
              Get Started
            </Button>
          </Center>
        </Box>
      </Box>
      <Container centerContent size={"xl"} mt={10} mb={10}>
        <List spacing={3}>
          <ListItem>
            <Text fontSize={"lg"}>
              <ListIcon as={CheckIcon} color="green.500" />
              User Authentication:<br></br>Users can sign in to the dApp using
              their preferred method of authentication such as MetaMask,
              WalletConnect, or other Web3 wallets.
            </Text>
          </ListItem>
          <ListItem>
            <Text fontSize={"lg"}>
              <ListIcon as={CheckIcon} color="green.500" />
              Chat System:<br></br>The dApp has a built-in chat system that
              allows users to communicate and arrange skill-sharing sessions.
            </Text>
          </ListItem>
        </List>
      </Container>
      <Container mt={5} size={"xl"} centerContent variant={"bold"} mb={5}>
        <ChakraProvider>
          <Box position="relative" p={4} color="#09203f">
            <VStack spacing={4}>
              <Container bg={"white"} borderRadius={"md"} fontSize={"xl"}>
                &gt; Person A: Have you checked out Skillshare on Polygon?
              </Container>
              <Container
                bg={
                  "linear-gradient(140deg, rgb(127, 198, 179) 0%, rgb(48, 245, 90) 100%)"
                }
                borderRadius={"md"}
                fontSize={"xl"}
              >
                &gt; Person B: No, what is it?
              </Container>
              <Container bg={"white"} borderRadius={"md"} fontSize={"xl"}>
                &gt; Person A: Skillshare on Polygon is a platform where users
                can connect with others to share their skills, get help on
                various topics, and collaborate on projects.
              </Container>
              <Container
                bg={
                  "linear-gradient(140deg, rgb(127, 198, 179) 0%, rgb(48, 245, 90) 100%)"
                }
                borderRadius={"md"}
                fontSize={"xl"}
              >
                &gt; Person B: That sounds really cool. How does it work?
              </Container>
              <Container bg={"white"} borderRadius={"md"} fontSize={"xl"}>
                &gt; Person A: Users can chat with other Persons based on their
                interests, and can share resources, and help each other out.
                Skillshare on Polygon provides a safe and supportive environment
                to learn new things and connect with like-minded individuals.
              </Container>
            </VStack>
          </Box>
        </ChakraProvider>
      </Container>
      <Container>
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
    </div>
  );
};

export default Home;
