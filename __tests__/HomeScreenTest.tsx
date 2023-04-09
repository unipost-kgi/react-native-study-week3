import { fireEvent, render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import React from 'react';

import HomeScreen from '../src/screens/HomeScreen';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('HomeScreen', () => {
  it('HomeScreen title 확인', () => {
    const { getByText } = render(<HomeScreen />);
    const title = getByText('HomeScreen');
    expect(title).toBeDefined();
  });

  it('Counter Test', () => {
    const { getByText } = render(<HomeScreen />);
    const plusOneButton = getByText('+1');
    const minusOneButton = getByText('-1');
    const resetButton = getByText('초기화');
    const number = getByText('0');
    expect(number).toBeDefined();

    fireEvent.press(plusOneButton);
    expect(number).toHaveTextContent('1');

    fireEvent.press(resetButton);
    expect(number).toHaveTextContent('0');

    fireEvent.press(minusOneButton);
    expect(number).toHaveTextContent('-1');
  });
});
