import fs from "fs";
import path from "path";
import { TokenList } from "@uniswap/token-lists";
import { version as ifereumDefaultVersion } from "../lists/ifereum-default.json";
import { version as ifereumExtendedVersion } from "../lists/ifereum-extended.json";
import { version as ifereumTop15Version } from "../lists/ifereum-top-15.json";
import { version as ifereumTop100Version } from "../lists/ifereum-top-100.json";
import { version as coingeckoVersion } from "../lists/coingecko.json";
import { version as ifereumMiniVersion } from "../lists/ifereum-mini.json";
import { version as ifereumMiniExtendedVersion } from "../lists/ifereum-mini-extended.json";
import ifereumDefault from "./tokens/ifereum-default.json";
import ifereumExtended from "./tokens/ifereum-extended.json";
import ifereumTop100 from "./tokens/ifereum-top-100.json";
import ifereumTop15 from "./tokens/ifereum-top-15.json";
import coingecko from './tokens/coingecko.json'
import ifereumMini from "./tokens/ifereum-mini.json";
import ifereumMiniExtended from "./tokens/ifereum-mini-extended.json";

export enum VersionBump {
  "major" = "major",
  "minor" = "minor",
  "patch" = "patch",
}

type Version = {
  major: number;
  minor: number;
  patch: number;
};

const lists = {
  "ifereum-default": {
    list: ifereumDefault,
    name: "IFereum Default",
    keywords: ["ifereum", "default"],
    logoURI: "https://ifereum.com/logo.png",
    sort: false,
    currentVersion: ifereumDefaultVersion,
  },
  "ifereum-extended": {
    list: ifereumExtended,
    name: "IFereum Extended",
    keywords: ["ifereum", "extended"],
    logoURI: "https://ifereum.com/logo.png",
    sort: true,
    currentVersion: ifereumExtendedVersion,
  },
  "ifereum-top-100": {
    list: ifereumTop100,
    name: "IFereum Top 100",
    keywords: ["ifereum", "top 100"],
    logoURI: "https://ifereum.com/logo.png",
    sort: true,
    currentVersion: ifereumTop100Version,
  },
  "ifereum-top-15": {
    list: ifereumTop15,
    name: "IFereum Top 15",
    keywords: ["ifereum", "top 15"],
    logoURI: "https://ifereum.com/logo.png",
    sort: true,
    currentVersion: ifereumTop15Version,
  },
  "coingecko": {
    list: coingecko,
    name: "CoinGecko",
    keywords: ["defi"],
    logoURI: "https://www.coingecko.com/assets/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png",
    sort: true,
    currentVersion: coingeckoVersion,
  },
  "ifereum-mini": {
    list: ifereumMini,
    name: "IFereum Mini",
    keywords: ["ifereum", "binance", "mini program", "mini"],
    logoURI: "https://ifereum.com/logo.png",
    sort: true,
    currentVersion: ifereumMiniVersion,
  },
  "ifereum-mini-extended": {
    list: ifereumMiniExtended,
    name: "IFereum Mini Ext",
    keywords: ["ifereum", "binance", "mini program", "mini", "extended"],
    logoURI: "https://ifereum.com/logo.png",
    sort: true,
    currentVersion: ifereumMiniExtendedVersion,
  },
};

const getNextVersion = (currentVersion: Version, versionBump?: VersionBump) => {
  const { major, minor, patch } = currentVersion;
  switch (versionBump) {
    case VersionBump.major:
      return { major: major + 1, minor, patch };
    case VersionBump.minor:
      return { major, minor: minor + 1, patch };
    case VersionBump.patch:
    default:
      return { major, minor, patch: patch + 1 };
  }
};

export const buildList = (listName: string, versionBump?: VersionBump): TokenList => {
  const { list, name, keywords, logoURI, sort, currentVersion } = lists[listName];
  const version = getNextVersion(currentVersion, versionBump);
  return {
    name,
    timestamp: new Date().toISOString(),
    version,
    logoURI,
    keywords,
    // sort them by symbol for easy readability (not applied to default list)
    tokens: sort
      ? list.sort((t1, t2) => {
          if (t1.chainId === t2.chainId) {
            // CAKE first in extended list
            if ((t1.symbol === "CAKE") !== (t2.symbol === "CAKE")) {
              return t1.symbol === "CAKE" ? -1 : 1;
            }
            return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
          }
          return t1.chainId < t2.chainId ? -1 : 1;
        })
      : list,
  };
};

export const saveList = (tokenList: TokenList, listName: string): void => {
  const tokenListPath = `${path.resolve()}/lists/${listName}.json`;
  const stringifiedList = JSON.stringify(tokenList, null, 2);
  fs.writeFileSync(tokenListPath, stringifiedList);
  console.info("Token list saved to ", tokenListPath);
};
