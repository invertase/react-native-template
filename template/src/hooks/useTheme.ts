import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { name } from '../../package.json';

export type ThemeType = 'light' | 'dark';

export interface UseTheme {
  loading: boolean;
  type: ThemeType;
  set: (theme: ThemeType) => Promise<void>;
}

const STORE = `${name}:theme`;

function useTheme(defaultTheme: ThemeType): UseTheme {
  const [theme, setTheme] = useState<ThemeType | null>(defaultTheme);

  useEffect(() => {
    AsyncStorage.getItem(STORE)
      .then(value => {
        setTheme((value as ThemeType) || defaultTheme);
        if (!value) {
          return AsyncStorage.setItem(STORE, defaultTheme);
        }
      })
      .catch(() => {
        console.warn('Failed to load theme from storage');
      });
  }, [defaultTheme]);

  return {
    loading: theme === null,
    type: theme || defaultTheme,
    set: async (setter: ThemeType) => {
      setTheme(setter);
      await AsyncStorage.setItem(STORE, setter);
    },
  };
}

export { useTheme };
