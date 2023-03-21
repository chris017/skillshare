import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import datajs from '../data.json';
import {
  Heading,
  Button,
  Box,
  Container,
  Flex,
  Spacer,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';


function validateName(value) {
  if (!value) {
    return 'Name is required';
  } else if (value.toLowerCase() !== 'chris') {
    return "Username already taken";
  }
}

function ChatApp() {
    const config = usePrepareContractWrite({
    address: '0x22d819FA52ffDB2465adcfC9B638f925c869f17f',
    abi: datajs.abi,
    functionName: 'createAccount',
    args: ['Chris'],
    }).config;
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  const [name, setName] = useState('');

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
        <Formik
          initialValues={{ name: '' }}
          onSubmit={(values, actions) => {
            setName(values.name);
            actions.setSubmitting(false);
          }}
        >
          {(props) => (
            <Form>
              <Field name='name' validate={validateName}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel>Create Username</FormLabel>
                    <Input {...field} placeholder='Username' />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                colorScheme='teal'
                isLoading={props.isSubmitting}
                type='submit'
              >
                Submit
              </Button>
                <button disabled={!write} onClick={() => write?.()}>
                    Register
                </button>
                {isLoading && <div>Check Wallet</div>}
                {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
            </Form>
          )}
        </Formik>
        {name && (
          <Box m={5}>
            <Heading size="md">Welcome {name}!</Heading>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default ChatApp;
