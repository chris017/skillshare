import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { UseContractConfig } from 'wagmi';
import config from '../data.json';
import { useContractRead } from 'wagmi'
import { useEffect } from 'react';


const Home: NextPage = () => {
  const { data, isError, isLoading } = useContractRead({
    address: "0x22d819FA52ffDB2465adcfC9B638f925c869f17f",
    abi: config.abi,
    functionName: 'getAllAppUser',
  })

  useEffect(()=>{
    console.log(data);
  },);
  return (
    <div className={styles.container}>
      <Head>
        <title>Skill-Share</title>
        <meta
          content=""
          name=""
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">Skill<span>-Share</span></a>
        </h1>
        <p className={styles.description}>
          Skill<span>-Share</span> is a decentralized application that allows users to<br></br>exchange skills with each other in a <span>peer-to-peer</span> manner.<br></br>The dApp can be used to <span>connect</span> users with complementary<br></br>skills and facilitate skill<span>-sharing</span> and learning.
        </p>
        <ConnectButton accountStatus={{
          smallScreen: 'avatar',
          largeScreen: 'full',
          }}
          showBalance={{
            smallScreen: false,
            largeScreen: true,}}/>
      </main>
    </div>
  );
};

export default Home;
