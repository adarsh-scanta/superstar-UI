import React from 'react';
import {Button} from 'react-bootstrap';

import { TezosToolkit } from '@taquito/taquito';

import {SMART_CONTRACT_ADDRESS,Tezos,getContract,getContractStorage} from '../tezos/index';

const getUserNFTs = async ()=>{
    let storage:any = await getContractStorage();
    const tokenIDs = storage?.reverse_ledger?.get("tz1TuAWC3z9ZgEMgHWVUCPubgSMpSZEePK2k");
    if(tokenIDs){
    }
};

export {
    getUserNFTs,
};