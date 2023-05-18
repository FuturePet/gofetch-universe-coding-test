import { View } from 'react-native';
import { SpaceText } from '../atoms/space-text';
import { ShipInventory } from '../molecules/ship-inventory';
import { useShipInventory } from '../../hooks/use-ship-inventory';
import { OrionSeven } from '../molecules/orion-seven';
import { useOrionSeven } from '../../hooks/use-orion-seven';

type ChartEntry = {
  name: string;
  buyPrice: number;
  sellPrice: number;
  profitPerUnit: number;
};

type PotentialProfitsProps = {
  entries: ChartEntry[];
  totalCargoProfit: number;
};

const PotentialProfits = ({ entries }: PotentialProfitsProps) => {
  return <View
    style={{
      backgroundColor: '#9f9ffc',
      padding: 16,
      margin: 24,
      minWidth: '60vw',
      minHeight: '20vh',
    }}
  >
    <SpaceText style="header">Potential Profits</SpaceText>
    {/* You enter your changes here */}
  </View>
};

export const InventoryListing = () => {
  const { loading, inventory } = useShipInventory();
  const { loading: orionLoading, marketItems } = useOrionSeven();
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        {!loading && <ShipInventory inventoryItems={inventory} />}
        {!orionLoading && <OrionSeven inventoryItems={marketItems} />}
        {!orionLoading && !loading && <PotentialProfits entries={[]} />}
      </View>

    </>
  );
};
