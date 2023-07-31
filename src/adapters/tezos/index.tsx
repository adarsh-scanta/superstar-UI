import React from "react";
import { Button } from "react-bootstrap";

import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-sdk";
 
const DAPP_NAME = "SuperstarXChange";
const NETWORK = NetworkType.HANGZHOUNET;
const RPC_URL = "https://hangzhounet.smartpy.io"; 
// addr of smart contract
// const SMART_CONTRACT_ADDRESS = "KT1AJjHqLRV9Cr4fCeH2miQsTgbsTsCzRfhZ";
// addr of superstar class
const SMART_CONTRACT_ADDRESS = "KT1UR1e5HTJmNtczjonmNoY72PB1afGDDDwi";
// addr of nft class 
// const SMART_CONTRACT_ADDRESS = "KT1V1jJFeAS61qW1rQE94V5smQDF13BYxsXa"
// const SMART_CONTRACT_ADDRESS = "KT1EBJNuyGTcM9z9czncdEjhoPMukkn12ayq";  

const Tezos = new TezosToolkit(RPC_URL);
const wallet = new BeaconWallet({
  name: DAPP_NAME,
  preferredNetwork: NETWORK,
});

Tezos.setWalletProvider(wallet);

const getActiveAccount = async () => {
  const activeAccount = await wallet.client.getActiveAccount();
  return activeAccount;
};

const connectAccount = async () => {
  const activeAccount = await wallet.client.getActiveAccount();
  // no active account, we need permissions first
  if (!activeAccount) {
    await wallet.requestPermissions({
      network: {
        type: NETWORK,
        rpcUrl: RPC_URL,
      },
    });
    return getActiveAccount();
  }
  return activeAccount;
};

const clearActiveAccount = async () => {
  return wallet.client.clearActiveAccount();
};

// const connectAccount = async () => {
//     let activeAccount = await wallet.client.getActiveAccount();

//     // If no active account found, then request permission from user
//     if(!activeAccount){
//         await wallet.requestPermissions({
//             network: {
//                 type: NETWORK,
//                 rpcUrl: RPC_URL
//             }
//         })
//         activeAccount = await wallet.client.getActiveAccount();
//     }

//     return activeAccount;
// };

const disconnectAccount = async () => {
  return wallet.client.clearActiveAccount();
};
const getContract = async () => {
  return Tezos.wallet.at(SMART_CONTRACT_ADDRESS);
};

const getContractStorage = async () => {
  return (await getContract()).storage();
};

const uploadToIPFS = async () => {
  return;
};

const createNFT = async (
  url: any,
  title: any,
  description: any,
  price: any
) => {
  const contract = await getContract();
  contract.methods.createNFT(url, title, description, price).send();
};

export {
  SMART_CONTRACT_ADDRESS,
  Tezos,
  disconnectAccount,
  wallet,
  connectAccount,
  getActiveAccount,
  clearActiveAccount,
  getContract,
  getContractStorage,
  uploadToIPFS,
  createNFT,
};
