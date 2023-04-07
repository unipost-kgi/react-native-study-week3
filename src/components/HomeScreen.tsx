import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [number, setNumber] = React.useState(0);
  const plusOne = () => {
    setNumber(number + 1);
  };
  const minusOne = () => {
    setNumber(number - 1);
  };
  const reset = () => {
    setNumber(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.text}>HomeScreen</Text>
      </View>
      <View style={styles.numberWrapper}>
        <Text style={styles.text}>{number}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={() => minusOne()}>
          <Text style={styles.buttonText}>-1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => reset()}>
          <Text style={styles.buttonText}>초기화</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => plusOne()}>
          <Text style={styles.buttonText}>+1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: {
    position: 'absolute',
    top: 100,
  },
  numberWrapper: {
    marginTop: 40,
  },
  text: {
    fontSize: 34,
  },
  buttonWrapper: {
    flexDirection: 'row',
    marginTop: 140,
  },
  button: {
    width: 100,
    height: 40,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 10,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 28,
    color: 'black',
  },
});
