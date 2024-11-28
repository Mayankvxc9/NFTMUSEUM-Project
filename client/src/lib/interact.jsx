import { ethers, Log } from "ethers";

export const connectWallet = async () => {
  if (window.ethereum) {
    console.log("runnonf");
    
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      
 
      

      const obj = {
        status: "👆🏽Metamask Connected",
        address: addressArray[0],
      };

      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};


export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "👆🏽 Write a message in the text-field above.",
        };

        
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export function addWalletListener(setAddress,setStatus) {
  if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
      
      if (accounts.length > 0) {
        setAddress(accounts[0]);
        setStatus("👆🏽 Write a message in the text-field above.");
      } else {
        setAddress("");
        setStatus("🦊 Connect to Metamask using the top right button.");
      }
    });
  } else {
    setStatus(
      <p>
        {" "}
        🦊{" "}
        <a target="_blank" href={`https://metamask.io/download`}>
          You must install Metamask, a virtual Ethereum wallet, in your
          browser.
        </a>
      </p>
    );
  }
}