import { fromBaseUnits } from './utils.js';

enum AssetType {
  ETH,
  DAI,
}

function getAssetDetails(type: AssetType): {
  id: number; /// aztec asset id
  symbol: string;
  coinMarketCapID: string;
} {
  switch (type) {
    case AssetType.ETH:
      return {
        id: 0,
        symbol: 'ETH',
        coinMarketCapID: '1027',
      };
    case AssetType.DAI:
      return {
        id: 1,
        symbol: 'DAI',
        coinMarketCapID: '4943',
      };
  }
}

class Asset {
  type: AssetType;
  id: number; /// aztec asset id
  symbol: string;
  coinMarketCapID: string;
  value: bigint;

  constructor(type: AssetType, value: bigint) {
    this.type = type;
    const { id, symbol, coinMarketCapID } = getAssetDetails(type);
    this.id = id;
    this.symbol = symbol;
    this.coinMarketCapID = coinMarketCapID;
    this.value = value;
  }

  getDisplayValue = () => {
    return fromBaseUnits(this.value, 18);
  };
}
