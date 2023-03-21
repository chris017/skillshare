import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { useContractWrite, usePrepareContractWrite, useContractRead } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import datajs from '../data.json';
import * as React from 'react';
export { React };
import Link from 'next/link'

import {
  Heading,
  Button,
  Container,
  Flex,
  Spacer,
  Text,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  ModalBody,
  ModalCloseButton,
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

  const { data: AllUsers } = useContractRead({
    address: '0x22d819FA52ffDB2465adcfC9B638f925c869f17f',
    abi: datajs.abi,
    functionName: 'getAllAppUser',
  })
  
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  const [name, setName] = useState('');
  const [showUsers, setShowUsers] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: is, onOpen: on, onClose: off} = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const handleShowUsers = () => {
    setShowUsers(true);
  };

  return (
    <div>
      <Flex>
        <Box m='5'>
          <Heading size={'lg'}><Link href="/">Skill<span className={styles.gradient}>-Share</span></Link></Heading>
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
        <Flex mt={5}>
            <Box>
                <Button 
                size='md'
                color="white"
                bg='green.400'
                _hover={{ bg: "white", color: "green.400" }}
                onClick={onOpen}>Register</Button>
                <Modal
                    initialFocusRef={initialRef}
                    isOpen={isOpen}
                    onClose={onClose}
                    >
                    <ModalOverlay />
                    <ModalContent bg={"#09203f"}>
                        <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                        <FormLabel>Create Username</FormLabel>
                        <Input ref={initialRef} placeholder='username' _active={{borderColor: 'white', }}/>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="white" 
                        bg='green.400'
                        _hover={{ bg: "white", color: "green.400" }} mr={3} disabled={!write} onClick={() => write?.()}>
                        Save
                        </Button>
                        <Button onClick={onClose}
                        color="white"
                        bg='red.400'
                        _hover={{ bg: "white", color: "green.400" }}
                        >Cancel</Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
            <Spacer m={5}/>
            <Box>
                <Button 
                size='md'
                color="white"
                bg='green.400'
                _hover={{ bg: "white", color: "green.400" }}
                onClick={on}>All Users</Button>
                <Drawer
                    isOpen={is}
                    placement="bottom"
                    onClose={off}
                    isFullHeight={true}>
                    <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader bg={"#09203f"}>All Users</DrawerHeader>
                        <DrawerBody bg={"#09203f"}>
                            {Array.isArray(AllUsers) ? (
                                <ul>
                                {AllUsers.map((user, index) => (
                                    <li key={index}>User: {user.name}<br></br>Address: {user.accountAddress}</li>
                                ))}
                                </ul>
                            ) : (
                                <div>No users found.</div>
                            )}
                        </DrawerBody>
                    </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
            </Box>
        </Flex>
      </Container>
    </div>
  );
};

export default ChatApp;
