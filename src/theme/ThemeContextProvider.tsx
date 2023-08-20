import { createTheme, Theme } from '@mui/material';
import { createContext, PropsWithChildren, useContext } from 'react';
import useColorTheme from './use-color-theme';

type ThemeContextType = {
  theme: Theme;
  mode: string;
  toggleColorMode: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: createTheme(),
  mode: 'light',
  toggleColorMode: () => {},
});

export function ThemeContextProvider({ children }: PropsWithChildren) {
  const value = useColorTheme();
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
