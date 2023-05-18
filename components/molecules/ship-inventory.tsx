import { View } from 'react-native';

import { InventoryItem } from '../../hooks/use-ship-inventory';

import { SpaceText } from '../atoms/space-text';
import { MarketItem } from '../atoms/market-item';

type ShipInventoryProps = {
  inventoryItems: InventoryItem[];
};

export const ShipInventory = ({ inventoryItems }: ShipInventoryProps) => {
  return (
    <View
      style={{
        backgroundColor: '#f9f0fa',
        padding: 16,
        borderRadius: 8,
        margin: 8,
      }}
    >
      <SpaceText style="header">Ship Inventory</SpaceText>
      {inventoryItems.map((item) => {
        return (
          <MarketItem
            item={{
              name: item.name,
              price: item.costPerUnit,
              quantity: item.quantity,
            }}
          />
        );
      })}
    </View>
  );
};
