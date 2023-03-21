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
          <Box>
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
                  onClick={() => router.push('/chat')}
                  bg='linear-gradient(140deg, rgb(127, 198, 179) 0%, rgb(48, 245, 90) 100%)'
                  _hover={{ bg: "white", color: "green.400" }}
                  >
                  Get Started
              </Button>
            </Center>    
          </Box>
      </Box>
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
