import { useEffect, useState } from 'react';

const MARKET_RATES = [
  { name: 'Magnetized Hammer', sellPrice: 5000 },
  { name: 'Bionic Cyberpliers', sellPrice: 4000 },
  { name: 'Space Blasters', sellPrice: 120000 },
  { name: 'Normal Kimonos', sellPrice: 900000 },
  { name: 'High-density Gofetchium', sellPrice: 10000000 },
];

export type MarketItem = {
  name: string;
  sellPrice: number;
};

export type UseOrionSeven = {
  loading: boolean;
  marketItems: MarketItem[];
};

const marketItems = (): Promise<MarketItem[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MARKET_RATES);
    }, 300);
  });
};

export const useOrionSeven = () => {
  const [currentMarketData, setMarketData] = useState<MarketItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    marketItems().then(setMarketData);
  }, []);

  useEffect(() => {
    if (!currentMarketData.length) return;
    setLoading(false);
  }, [currentMarketData]);

  return {
    loading: loading,
    marketItems: currentMarketData,
  };
};
