import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Heading, Box, Spacer, Flex } from '@chakra-ui/react';

function HeaderChat() {
  return (
    <Flex>
        <Box m='5'>
          <Heading size={'lg'}>
            <Link href="/">
                <a>Skill<span className={styles.gradient}>-Share</span></a>
            </Link>
          </Heading>
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
  );
}

export default HeaderChat;
