import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
// import { CreateAccount } from '~/screens/CreateAccount';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <CreateAccount /> */}
      <StatusBar style="auto" />
      <Text>Hi</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
