import { useEffect, useState } from 'react';

const INVENTORY = [
  { name: 'Magnetized Hammer', buyPrice: 10000, quantity: 4000 },
  { name: 'Bionic Cyberpliers', buyPrice: 2000, quantity: 2000 },
  { name: 'Space Blasters', buyPrice: 114000, quantity: 1500 },
  { name: 'High-density Gofetchium', buyPrice: 10000000, quantity: 1 },
];

export type InventoryItem = {
  name: string;
  buyPrice: number;
  quantity: number;
};

export type UseShipInventory = {
  loading: boolean;
  inventory: InventoryItem[];
};

const inventory = (): Promise<InventoryItem[]> => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(INVENTORY);
    }, 300);
  });
};

export const useShipInventory = () => {
  const [currentInventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    inventory().then((inventory) => setInventory(inventory));
  }, []);

  useEffect(() => {
    if (!currentInventory.length) return;
    setLoading(false);
  }, [currentInventory]);

  return {
    loading: loading,
    inventory: currentInventory,
  };
};
