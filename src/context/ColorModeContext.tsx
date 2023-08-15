import { createContext, useContext, useState, useMemo, ReactNode } from 'react';

type ColorContextValue = {
  colorMode: 'light' | 'dark';
  toggleColorMode: () => void;
};

const ColorModeContext = createContext<ColorContextValue>({
  colorMode: 'light',
  toggleColorMode: () => {},
});

const useColorMode = () => {
  const context = useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
};

type ColorModeProviderProps = {
  children: ReactNode;
};

function ColorModeProvider({ children }: ColorModeProviderProps) {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const contextValue = useMemo(
    () => ({
      colorMode,
      toggleColorMode,
    }),
    [colorMode]
  );

  return (
    <ColorModeContext.Provider value={contextValue}>
      {children}
    </ColorModeContext.Provider>
  );
}

export { ColorModeProvider, useColorMode };
