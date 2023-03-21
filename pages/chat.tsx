import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import { useContractWrite, usePrepareContractWrite, useContractRead } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import datajs from '../data.json';
import {
  Heading,
  Button,
  Box,
  Container,
  Flex,
  Spacer,
  Text,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';


function ChatApp() {
    const config = usePrepareContractWrite({
    address: '0x22d819FA52ffDB2465adcfC9B638f925c869f17f',
    abi: datajs.abi,
    functionName: 'createAccount',
    args: ['Chris'],
    }).config;
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const { data: AllUsers } = useContractRead({
    address: '0x22d819FA52ffDB2465adcfC9B638f925c869f17f',
    abi: datajs.abi,
    functionName: 'getAllAppUser',
  })

  useEffect(() => {
    const fetchUsers = async () => {
      if (Array.isArray(AllUsers)) {
        setUsers(AllUsers);
      }
    };

    fetchUsers();
  }, [AllUsers]);
  
  return (
    <div>
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
      <Container centerContent size="lg" fontSize='2xl' variant={"bold"} mt={10}>
        <Heading size="2xl" m={5}>
          Skill<span className={styles.gradient}>-Share</span> Chat
        </Heading>
        <button disabled={!write} onClick={() => write?.()}>
            Register
        </button>
        {isLoading && <div>Check Wallet</div>}
        {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
      </Container>
      <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ChatApp;
