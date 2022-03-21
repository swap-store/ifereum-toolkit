import fs from "fs";
import path from "path";
import { getAddress } from "@ethersproject/address";
import ifereumDefault from "./tokens/ifereum-default.json";
import ifereumExtended from "./tokens/ifereum-extended.json";
import ifereumTop100 from "./tokens/ifereum-top-100.json";
import ifereumTop15 from "./tokens/ifereum-top-15.json";
import coingecko from "./tokens/coingecko.json";
import ifereumMini from "./tokens/ifereum-mini.json";
import ifereumMiniExtended from "./tokens/ifereum-mini-extended.json";

const lists = {
  "ifereum-default": ifereumDefault,
  "ifereum-extended": ifereumExtended,
  "ifereum-top-100": ifereumTop100,
  "ifereum-top-15": ifereumTop15,
  "coingecko": coingecko,
  "ifereum-mini": ifereumMini,
  "ifereum-mini-extended": ifereumMiniExtended,
};

const checksumAddresses = (listName: string): void => {
  let badChecksumCount = 0;
  const listToChecksum = lists[listName];
  const updatedList = listToChecksum.reduce((tokenList, token) => {
    const checksummedAddress = getAddress(token.address);
    if (checksummedAddress !== token.address) {
      badChecksumCount += 1;
      const updatedToken = { ...token, address: checksummedAddress };
      return [...tokenList, updatedToken];
    }
    return [...tokenList, token];
  }, []);

  if (badChecksumCount > 0) {
    console.info(`Found and fixed ${badChecksumCount} non-checksummed addreses`);
    const tokenListPath = `${path.resolve()}/src/tokens/${listName}.json`;
    console.info("Saving updated list to ", tokenListPath);
    const stringifiedList = JSON.stringify(updatedList, null, 2);
    fs.writeFileSync(tokenListPath, stringifiedList);
    console.info("Checksumming done!");
  } else {
    console.info("All addresses are already checksummed");
  }
};

export default checksumAddresses;
