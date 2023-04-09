import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SearchScreen() {
  return (
    <View style={styles.container} testID="SearchScreen">
      <Text style={styles.text} testID="SearchScreenTitle">
        SearchScreen
      </Text>
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
