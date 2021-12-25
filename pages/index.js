import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';
import Web3Modal from 'web3modal';

import { nftaddress, nftmarketaddress } from '../config';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>HOME</h1>
    </div>
  );
}
