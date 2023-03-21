import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { useContractRead, UseContractConfig } from 'wagmi';
import config from '../data.json';
import { Heading,
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
  AbsoluteCenter,
  UnorderedList} from '@chakra-ui/react';
import { CheckIcon} from '@chakra-ui/icons'

const Home: NextPage = () => {
  const [started, setStarted] = useState(false);
  const router = useRouter();

  const handleGetStarted = () => {
    setStarted(true);
    router.push('/chat');
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
          <Box m='5'>
            <Heading size={'lg'}>Skill<span className={styles.gradient}>-Share</span></Heading>
          </Box>
          <Spacer />
          <Box m='5'>
            <ConnectButton
                accountStatus={{
                  smallScreen: 'avatar',
                  largeScreen: 'full',
                }}
                showBalance={{
                  smallScreen: false,
                  largeScreen: true,
                }}
              />
          </Box>
        </Flex>
          <Box mt={10}>
            <Center>
              <Heading size="3xl" m={5}> 
                Welcome to Skill<span className={styles.gradient}>-Share</span>
              </Heading>
            </Center>
            <Container centerContent size="lg" fontSize='2xl' variant={"bold"} mb={5}>
              <Box>
                Skill<span className={styles.gradient}>-Share</span> is a decentralized application that allows users to exchange skills with each other in a <span className={styles.gradient}>peer-to-peer</span> manner. The dApp can be used to <span className={styles.gradient}>connect</span> users with complementary skills and facilitate skill<span className={styles.gradient}>-sharing</span> and learning.
              </Box>
            </Container>
            <Center>
              <Button 
                  size='md'
                  color="white"
                  height='48px'
                  width='200px'
                  mb={5}
                  onClick={() => router.push('/chat')}
                  bg='linear-gradient(140deg, rgb(127, 198, 179) 0%, rgb(48, 245, 90) 100%)'
                  _hover={{ bg: "white", color: "green.400" }}
                  >
                  Get Started
              </Button>
            </Center>    
          </Box>
      </Box>
      <Container mt={5} size={"xl"} centerContent variant={"bold"}>
        <ChakraProvider>
          <Box position="relative" p={4} color="#09203f">
            <VStack spacing={4}>
              <Container bg={"white"} borderRadius={"md"} fontSize={"xl"}>
                &gt; Person A: Have you checked out Skillshare on Polygon?
              </Container>
              <Container bg={"linear-gradient(140deg, rgb(127, 198, 179) 0%, rgb(48, 245, 90) 100%)"} borderRadius={"md"} fontSize={"xl"}>
                &gt; Person B: No, what is it?
              </Container>
              <Container bg={"white"} borderRadius={"md"} fontSize={"xl"}>
                &gt; Person A: Skillshare on Polygon is a platform where users can connect with others to share their skills, get help on various topics, and collaborate on projects.
              </Container>
              <Container bg={"linear-gradient(140deg, rgb(127, 198, 179) 0%, rgb(48, 245, 90) 100%)"} borderRadius={"md"} fontSize={"xl"}>
                &gt; Person B: That sounds really cool. How does it work?
              </Container>
              <Container bg={"white"} borderRadius={"md"} fontSize={"xl"}>
                &gt; Person A: Users can join different groups based on their interests, and then they can chat, share resources, and help each other out. Skillshare on Polygon provides a safe and supportive environment to learn new things and connect with like-minded individuals.
              </Container>
            </VStack>
          </Box>
        </ChakraProvider>
      </Container>
      <Container centerContent size={"xl"} mt={10}>
          <List spacing={3}>
            <ListItem>
              <Text fontSize={"lg"}><ListIcon as={CheckIcon} color='green.500' />
                User Authentication: Users can sign in to the dApp using their preferred method of authentication such as MetaMask, WalletConnect, or other Web3 wallets.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={"lg"}><ListIcon as={CheckIcon} color='green.500' />
                Skill Listing: Users can list the skills they have to offer and the skills they want to learn on the dApp.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={"lg"}><ListIcon as={CheckIcon} color='green.500' />
                Skill Matching: The dApp can use algorithms to match users with complementary skills and facilitate skill-sharing and learning.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={"lg"}><ListIcon as={CheckIcon} color='green.500' />
                Chat System: The dApp can have a built-in chat system that allows users to communicate and arrange skill-sharing sessions.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={"lg"}><ListIcon as={CheckIcon} color='green.500' />
                Rating and Review System: The dApp can have a rating and review system that allows users to rate and review each other's skills and facilitate trust between users.
              </Text>
            </ListItem>
          </List>
        </Container>
    </div>
  );
};

export default Home;
