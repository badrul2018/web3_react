import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Web3 from 'web3';
let web3= new Web3(window.web3.currentProvider)
function App() {
  // const handlClick= async ()=>{
  //   if(! window.ethereum)
  //   {
  //     window.alert('Please install MetaMask first.');
	// 		return;
  //   }
  //   if(! web3)
  //   {
  //     try {
	// 			// Request account access if needed
	// 			await window.ethereum.enable();

	// 			// We don't know window.web3 version, so we use our own instance of Web3
	// 			// with the injected provider given by MetaMask
	// 			web3 = new Web3(window.ethereum);
	// 		} catch (error) {
	// 			window.alert('You need to allow MetaMask.');
	// 			return;
	// 		}
  //   }
  //   window.ethereum.on('accountsChanged', function (accounts) {
  //       console.log(accounts[0])
  //   });

  // }

  /*
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try { 
       window.ethereum.enable().then(function() {
           // User has allowed account access to DApp...

       });
    } catch(e) {
       // User has denied account access to DApp...
    }
 }
 // Legacy DApp Browsers
 else if (window.web3) {
     web3 = new Web3(window.web3.currentProvider);
     console.log( web3.eth.accounts[0])
 }
 // Non-DApp Browsers
 else {
     alert('You have to install MetaMask !');
 }
 */

 // logic for check the eth account
 const [id,setId]=useState([])
const  isLocked=()=> {
  web3.eth.getAccounts(function(err, accounts){
     if (err != null) {
        console.log(err)
     }
     else if (accounts.length === 0) {
        console.log('MetaMask is locked')
        
     }
     else {
        console.log('MetaMask is unlocked')
        setId(accounts)
     }
  });
}


  return (
    <div className="App">
      
      <button onClick={isLocked} >check MetaMask</button>
      { id.map((id,index)=><h1 key={index}>{id}</h1>) }
    </div>
  );
}

export default App;
