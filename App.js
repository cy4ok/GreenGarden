import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainScreen } from './src/MainScreen';

export default function App() {
  return (
    <View style={styles.container}>
        <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30
  },
});
