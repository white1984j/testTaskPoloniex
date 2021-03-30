export type TDataBody = {
  baseVolume: string;
  high24hr: string;
  highestBid: string;
  id: number;
  isFrozen: string;
  last: string;
  low24hr: string;
  lowestAsk: string;
  percentChange: string;
  quoteVolume: string;
};

export type TData = {
  [key: string]: TDataBody;
};
