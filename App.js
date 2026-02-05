import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>José Carlos da Costa Ferreira Filho, Vinícius Lucena Lima e Igor de Araújo Azevedo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3bafdd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
