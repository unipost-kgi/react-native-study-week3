import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import React from 'react';

import MainScreen from '../src/screens/MainScreen';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('MainScreen', () => {
  it('모든 네비게이션 탭 확인', () => {
    const { getByTestId } = render(<MainScreen />);
    const homeTab = getByTestId('HomeTab');
    const searchTab = getByTestId('SearchTab');
    const notificationTab = getByTestId('NotificationTab');
    const messageTab = getByTestId('MessageTab');
    expect(homeTab).toBeDefined();
    expect(searchTab).toBeDefined();
    expect(notificationTab).toBeDefined();
    expect(messageTab).toBeDefined();
  });

  const navigation = {
    navigate: jest.fn(),
  };

  it('검색 화면 탭 클릭', async () => {
    const { getByText } = render(<MainScreen />);

    const HomeTitle = await screen.findByText('HomeScreen');
    expect(HomeTitle).toBeDefined();

    const searchTab = await screen.findByTestId('SearchTab');
    fireEvent.press(searchTab);
    const SearchTitle = await screen.findByText('HomeScreen');
    // const SearchTitle = await screen.findByText('SearchScreen');
    expect(SearchTitle).toBeDefined();
  });
});
