import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export const Loader: React.FC = (): JSX.Element => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" />
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});
