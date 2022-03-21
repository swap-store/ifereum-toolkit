import srcDefault from "./tokens/ifereum-default.json";
import srcExtended from "./tokens/ifereum-extended.json";
import srcTop100 from "./tokens/ifereum-top-100.json";
import srcTop15 from "./tokens/ifereum-top-15.json";
import srcCoingecko from "./tokens/coingecko.json";
import srcMini from "./tokens/ifereum-mini.json";
import srcMiniExtended from "./tokens/ifereum-mini-extended.json";
import defaultList from "../lists/ifereum-default.json";
import extendedtList from "../lists/ifereum-extended.json";
import top15List from "../lists/ifereum-top-15.json";
import top100tList from "../lists/ifereum-top-100.json";
import coingeckoList from "../lists/coingecko.json";
import miniList from "../lists/ifereum-mini.json";
import miniExtendedList from "../lists/ifereum-mini-extended.json";

const lists = [
  {
    name: "ifereum-default",
    src: srcDefault,
    actual: defaultList,
  },
  {
    name: "ifereum-extended",
    src: srcExtended,
    actual: extendedtList,
  },
  {
    name: "ifereum-top-15",
    src: srcTop15,
    actual: top15List,
  },
  {
    name: "ifereum-top-100",
    src: srcTop100,
    actual: top100tList,
  },
  {
    name: "coingeckoList",
    src: srcCoingecko,
    actual: coingeckoList
  },
  {
    name: "ifereum-mini",
    src: srcMini,
    actual: miniList,
  },
  {
    name: "ifereum-mini-extended",
    src: srcMiniExtended,
    actual: miniExtendedList,
  },
];

const compareLists = (listPair) => {
  const { name, src, actual } = listPair;
  if (src.length !== actual.tokens.length) {
    throw Error(
      `List ${name} seems to be not properly regenerated. Soure file has ${src.length} tokens but actual list has ${actual.tokens.length}. Did you forget to run yarn makelist?`
    );
  }
  src.sort((t1, t2) => (t1.address < t2.address ? -1 : 1));
  actual.tokens.sort((t1, t2) => (t1.address < t2.address ? -1 : 1));
  src.forEach((srcToken, index) => {
    if (JSON.stringify(srcToken) !== JSON.stringify(actual.tokens[index])) {
      throw Error(
        `List ${name} seems to be not properly regenerated. Tokens from src/tokens directory don't match up with the final list. Did you forget to run yarn makelist?`
      );
    }
  });
};

/**
 * Check in CI that author properly updated token list
 * i.e. not just changed token list in src/tokens but also regenerated lists with yarn makelist command.
 * Github Action runs only on change in src/tokens directory.
 */
const ciCheck = (): void => {
  lists.forEach((listPair) => {
    compareLists(listPair);
  });
};

export default ciCheck;
