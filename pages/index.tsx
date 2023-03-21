import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useContractRead, UseContractConfig } from 'wagmi';
import config from '../data.json';
import { Heading,
  Text,
  Button,
  ButtonGroup,
  Box,
  Flex,
  Spacer,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  Divider,
  Center,
  UnorderedList} from '@chakra-ui/react';
import { CheckIcon} from '@chakra-ui/icons'

const Home: NextPage = () => {
  const { data, isError, isLoading } = useContractRead({
    address: '0x22d819FA52ffDB2465adcfC9B638f925c869f17f',
    abi: config.abi,
    functionName: 'getAllAppUser',
  })
  if (Array.isArray(data)) {
    console.log(data[0].name)
  }
  return (
    <Box h='calc(100vh)'>
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
      <Box className={styles.main} pt={20}>
        <Heading size="3xl" m={5}> 
          Welcome to Skill<span className={styles.gradient}>-Share</span>
        </Heading>
        <Heading size="lg" mb={10}>
            Skill<span className={styles.gradient}>-Share</span> is a decentralized application that allows users to<br></br>exchange skills with each other in a <span className={styles.gradient}>peer-to-peer</span> manner.<br></br>The dApp can be used to <span className={styles.gradient}>connect</span> users with complementary<br></br>skills and facilitate skill<span className={styles.gradient}>-sharing</span> and learning.
        </Heading>
        <Button 
            size='md'
            height='48px'
            width='200px'
            border='2px'
            borderColor='green.400'
            bg='linear-gradient(140deg, rgb(127, 198, 179) 0%, rgb(48, 245, 90) 100%)'
            _hover={{ bg: "linear-gradient(140deg, rgb(127, 198, 179) 0%, rgb(48, 245, 90) 100%)" }}
            >
            Get Started
        </Button>
        <Center height='50px' m={5}>
          <Divider orientation='vertical' />
        </Center>
        <List spacing={3}>
          <ListItem>
            <Text size={"xl"}><ListIcon as={CheckIcon} color='green.500' />
              User Authentication: Users can sign in to the dApp using their preferred method of authentication such as MetaMask, WalletConnect, or other Web3 wallets.
            </Text>
          </ListItem>
          <ListItem>
            <Text size={"xl"}><ListIcon as={CheckIcon} color='green.500' />
              Skill Listing: Users can list the skills they have to offer and the skills they want to learn on the dApp.
            </Text>
          </ListItem>
          <ListItem>
            <Text size={"xl"}><ListIcon as={CheckIcon} color='green.500' />
              Skill Matching: The dApp can use algorithms to match users with complementary skills and facilitate skill-sharing and learning.
            </Text>
          </ListItem>
          <ListItem>
            <Text size={"xl"}><ListIcon as={CheckIcon} color='green.500' />
              Chat System: The dApp can have a built-in chat system that allows users to communicate and arrange skill-sharing sessions.
            </Text>
          </ListItem>
          <ListItem>
            <Text size={"xl"}><ListIcon as={CheckIcon} color='green.500' /></Text>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Home;
