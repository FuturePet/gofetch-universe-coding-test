import { useEffect, useState } from 'react';

const MARKET_RATES = [
  { name: 'Magnetized Hammer', pricePerUnit: 5000 },
  { name: 'Bionic Cyberpliers', pricePerUnit: 4000 },
  { name: 'Space Blasters', pricePerUnit: 120000 },
  { name: 'Normal Kimonos', pricePerUnit: 900000 },
  { name: 'High-density Gofetchium', pricePerUnit: 10000000 },
];

export type MarketItem = {
  name: string;
  pricePerUnit: number;
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
