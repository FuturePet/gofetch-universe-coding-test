import React from 'react';
import { View } from 'react-native';
import { SpaceText } from './space-text';

export type MarketItem = {
  name: string;
  price: number;
  quantity?: number;
};

type MarketItemProps = {
  item: MarketItem;
};

export const MarketItem = ({ item }: MarketItemProps): React.ReactElement => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      <SpaceText style="body">{item.name}</SpaceText>
      <SpaceText style="body">{item.price}</SpaceText>
      {item?.quantity && (
        <SpaceText style="body">{item.quantity} units</SpaceText>
      )}
    </View>
  );
};
