import React from 'react';
import {Button} from 'react-bootstrap';

import { TezosToolkit } from '@taquito/taquito';
import {BeaconWallet} from '@taquito/beacon-wallet';
import { NetworkType } from "@airgap/beacon-sdk";

import { connectAccount, getContract, getContractStorage } from '../../adapters/tezos/index';
import {getUserNFTs} from '../../adapters/ipfs/index';

class Upload extends React.Component<any,any>{
    
    account:any;
    contract:any;
    storage:any;

    constructor(props:any){
        super(props);
        this._init();
        this.state = {wallet_connected:false,address:""};
    }

    _init = async ()=>{
      this.account = await connectAccount();
      this.contract = await getContract();
      this.storage = await getContractStorage();
      this.setState({wallet_connected:true,address:this.account?.address});
    }

    render(){
        return (
          <div className="App">
            {this.state.wallet_connected ? (<Button variant="outline-primary" onClick={getUserNFTs}>fetchUserNFTs</Button>):(<Button variant="outline-primary" disabled>fetchUserNFTs</Button>)}
            <br/>

          </div>
        );
    }
}

export default Upload;
