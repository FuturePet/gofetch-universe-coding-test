import { View } from 'react-native';
import { SpaceText } from '../atoms/space-text';
import { MarketItem } from '../atoms/market-item';
import type { MarketItem as MarketItemType } from '../../hooks/use-orion-seven';

type OrionSevenProps = {
  inventoryItems: MarketItemType[];
};

export const OrionSeven = ({ inventoryItems }: OrionSevenProps) => {
  return (
    <View
      style={{
        backgroundColor: '#f6f3d1',
        padding: 16,
        margin: 8,
      }}
    >
      <SpaceText style="header">Orion VII</SpaceText>
      <SpaceText style="subtitle">
        The best marketplace this side of Galaxon V!
      </SpaceText>
      {inventoryItems.map((item) => {
        return <MarketItem item={{ name: item.name, price: item.pricePerUnit }} />;
      })}
    </View>
  );
};
