import { ethers } from "ethers";
import wearablesAbi from "../abis/wearablesAbi";
import { WearableClaim } from "./wearable.types";

// Alchemy / Ethers Provider Setup

const signer = process.env.ACCOUNT_PRIVATE_KEY;

const provider = new ethers.providers.AlchemyProvider("matic", process.env.ALCHEMY_API_KEY);

const ethersWallet = new ethers.Wallet(signer, provider);

// Service Methods

const sendWearable = async (claim: WearableClaim) => {
  const nftContract = new ethers.Contract(claim.contractAddress, wearablesAbi, ethersWallet);
  try {
    const mintTransaction = await mintNewWearable(nftContract, claim);
    return mintTransaction;
  } catch (error) {
    console.log(error);
  }
};

const mintNewWearable = async (nftContract: ethers.Contract, claim: WearableClaim) => {
  try {
    const estimatedGasPrice = await provider.getGasPrice();
    const estimatedGasLimit = await nftContract.estimateGas.issueTokens([claim.wallet], [claim.tokenId]);
    const gasPrice = Number(ethers.utils.formatUnits(estimatedGasPrice, "wei"));
    const gasLimit = Number(ethers.utils.formatUnits(estimatedGasLimit, "wei"));
    const options = { gasPrice, gasLimit };

    const transaction = await nftContract.issueTokens([claim.wallet], [claim.tokenId], options);

    // Log transaction hash to console
    console.log(transaction.hash);

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, error };
  }
};

export { sendWearable };
