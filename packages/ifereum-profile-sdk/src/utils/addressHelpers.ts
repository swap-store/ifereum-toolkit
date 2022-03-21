import addresses from "../constants/contracts";
import { Address } from "../types";

export const getNftAddress = (nftAddresses: Address, chainId: number): string => {
  return nftAddresses[chainId];
};

export const getIFereumProfileAddress = (chainId: number): string => {
  return addresses.ifereumProfile[chainId];
};
