import addresses from "../constants/contracts";
import { MAINNET_CHAIN_ID, TESTNET_CHAIN_ID } from "../constants/common";
import { getIFereumProfileAddress } from "./addressHelpers";

describe("addressHelpers", () => {
  it("getAddress returns correct mainnet address", () => {
    const profileAddress = getIFereumProfileAddress(MAINNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.ifereumProfile[MAINNET_CHAIN_ID]);
  });
  it("getAddress returns correct testnet address", () => {
    const profileAddress = getIFereumProfileAddress(TESTNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.ifereumProfile[TESTNET_CHAIN_ID]);
  });
});
