"use client"; // Add this line to mark the component as a Client Component

import React, { useState, useEffect } from "react";

const MetaMaskButton: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState<string | null>(null);

  // Check if MetaMask is installed
  const isMetaMaskInstalled = (): boolean => {
    return typeof (window as any).ethereum !== "undefined";
  };

  // Connect MetaMask Wallet
  const connectMetaMask = async () => {
    if (isMetaMaskInstalled()) {
      try {
        const accounts = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to proceed.");
    }
  };

  // Handle account change (e.g., user switches accounts)
  const handleAccountsChanged = (accounts: string[]) => {
    if (accounts.length > 0) {
      setAccount(accounts[0]);
      setIsConnected(true);
    } else {
      setAccount(null);
      setIsConnected(false);
    }
  };

  // Handle chain (network) changes
  const handleChainChanged = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (isMetaMaskInstalled()) {
      (window as any).ethereum.on("accountsChanged", handleAccountsChanged);
      (window as any).ethereum.on("chainChanged", handleChainChanged);
    }

    // Clean up listeners on component unmount
    return () => {
      if (isMetaMaskInstalled()) {
        (window as any).ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
        (window as any).ethereum.removeListener(
          "chainChanged",
          handleChainChanged
        );
      }
    };
  }, []);

  return (
    <div>
      {isConnected ? (
        <p>Connected Account: {account}</p>
      ) : (
        <button onClick={connectMetaMask} className="meta-mask-button">
          Connect MetaMask
        </button>
      )}
    </div>
  );
};

export default MetaMaskButton;
