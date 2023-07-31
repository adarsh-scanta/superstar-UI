import axios from "axios";

export function ipfs_url_from_hash(h) {
  return "https://ipfs.io/ipfs/" + h;
}

export const hexToStr = (hex) => {
  let buf = Buffer.from(hex, "hex");
  let data = buf.toString("utf8");
  return data;
};
export const fetchIpfsData = async (hash) => {
  const ipfsResponse = await axios.get(
    "https://superstarxchange.mypinata.cloud/ipfs/" + hash
  );
  return ipfsResponse.data;
};
export const combineNFTwithSales = async (nftsRaw, salesRaw) => {
  let tempArray = [];
  for (let i = 0; i < salesRaw.length; i++) {
    const tempObj = {};
    nftsRaw.forEach((item, idx) => {
      if (parseInt(item.key) === parseInt(salesRaw[i].key)) {
        Object.assign(tempObj, item);
        Object.assign(tempObj, item.value);
        Object.assign(tempObj, salesRaw[i]);
      }
    });
    tempArray.push(tempObj);
  }

  return tempArray;
};

export const mapNFTtoIpfs = async (item, hash) => {
  const tempObj = {};
  const res = await fetchIpfsData(hash);
  Object.assign(tempObj, item);
  Object.assign(tempObj, res);
  //   nftData.push(tempObj);
  return tempObj;
};

export const fetchData = async () => {
  let nftData = [];
  let fetching = true;
  let index = 0;
  const tempVar = [];
  const nftsRaw = await axios.get(
    "https://api.mainnet.tzkt.io/v1/bigmaps/121046/keys"
  );
  const salesRaw = await axios.get(
    "https://api.mainnet.tzkt.io/v1/bigmaps/121049/keys"
  );

  const globalNFTS = await axios.get(
    "https://api.tzkt.io/v1/tokens/balances?account=tz1hoGRTcCbZDvoj1hdyjh4X6KDMVu1HgPrp"
  );

  const temppartialNFTsData = await combineNFTwithSales(
    nftsRaw.data.filter(
      (item, idx) =>
        item.key !== "19677" &&
        item.key !== "94552" &&
        item.key !== "81395" &&
        item.key !== "60122" &&
        item.key !== "49188"
    ),
    salesRaw.data.reverse()
  );
  const partialNFTsData = [];
  for (let i = 0; i < temppartialNFTsData.length; i++) {
    if (temppartialNFTsData[i].key)
      partialNFTsData.push(temppartialNFTsData[i]);
  }
  index = partialNFTsData.length;

  for (let i = 0; i < index; i++) {
    const res = await mapNFTtoIpfs(
      partialNFTsData[i],
      hexToStr(partialNFTsData[i].token_info.metadata).split("/").slice(-1)[0]
    );
    nftData.push(res);
    if (i === index - 1) {
      fetching = false;
    }
  }
  let list = [];
  for (let i = 0; i < globalNFTS.data.length; i++) {
    const tempObj = {};
    nftData.forEach((item) => {
      if (parseInt(item.nftID) === parseInt(globalNFTS.data[i].token.tokenId)) {
        Object.assign(tempObj, item);
        Object.assign(tempObj, globalNFTS.data[i]);
        list.push(tempObj);
      }
    });
  }

  return list.reverse();
};

export const xtzToUsd = async (xtzAmount) => {
  const result = await axios.get(
    "https://api.coinpaprika.com/v1/price-converter?base_currency_id=xtz-tezos-token&quote_currency_id=usd-us-dollars&amount=" +
      xtzAmount
  );
  return result.data.price.toFixed(2);
};

export const usdToXtz = async (usdAmount) => {
  const result = await axios.get(
    "https://api.coinpaprika.com/v1/price-converter?base_currency_id=usd-us-dollars&quote_currency_id=xtz-tezos-token&amount=" +
      usdAmount
  );
  return parseInt(result.data.price * 1000000);
};
