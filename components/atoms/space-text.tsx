import { PropsWithChildren } from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body: {
    fontSize: 16,
    padding: 4,
  },
  header: {
    fontSize: 36,
  },
  subtitle: {
    fontSize: 10,
  },
});

type SpaceTextProps = {
  style: keyof typeof styles;
};

export const SpaceText = ({
  children,
  style,
}: PropsWithChildren<SpaceTextProps>) => {
  return <Text style={styles[style]}>{children}</Text>;
};
