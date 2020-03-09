import React from 'react';
import { UseTheme } from './hooks/useTheme';

const ThemeContext = React.createContext<UseTheme>({} as UseTheme);

export { ThemeContext };
