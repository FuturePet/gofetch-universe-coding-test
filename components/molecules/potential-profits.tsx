import { View } from 'react-native';
import { SpaceText } from '../atoms/space-text';

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

export const PotentialProfits = ({ entries }: PotentialProfitsProps) => {
  /* TODO: Display a chart of prices with the following information
   * - Item Name
   * - Item Buy Price
   * - Item Sell Price
   * - Profit per unit (display green if positive)
   * - Total profit if all units are sold (green if positive)
   *
   * Bonus:
   * - If we do not carry an item in the market place,
   *   display it but render the profit per unit, total profit,
   *   and buy price as "N/A"
   */
  return <SpaceText style="body">Hello from inside PriceChart!</SpaceText>;
};
