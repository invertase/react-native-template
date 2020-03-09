import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import { useTheme } from './hooks/useTheme';
import { ThemeContext } from './context';

async function bootstrap() {}

function App() {
  const [initializing, setInitializing] = useState<boolean>(true);

  const theme = useTheme('light');

  useEffect(() => {
    // Initializers
    if (theme.loading) {
      return;
    }

    bootstrap()
      .then(() => setInitializing(false))
      .catch(console.error);
  }, [theme.loading]);

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      <PaperProvider>
        <ThemeContext.Provider value={theme}>
          <View />
        </ThemeContext.Provider>
      </PaperProvider>
    </NavigationContainer>
  );
}

export { App };
