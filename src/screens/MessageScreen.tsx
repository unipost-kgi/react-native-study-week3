import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MessageScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MessageScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    position: 'absolute',
    top: 100,
    fontSize: 34,
  },
});
