import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ImagesList} from '../components';

export const HomeScreen: React.FC = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ImagesList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
});
