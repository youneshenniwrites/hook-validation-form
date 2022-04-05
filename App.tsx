import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { CreateAccount } from './src/screens/CreateAccount';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <CreateAccount />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
});
