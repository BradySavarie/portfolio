import { jsx as _jsx } from "react/jsx-runtime";
import { createTheme } from '@mui/material';
import { createContext, useContext } from 'react';
import useColorTheme from './use-color-theme';
const ThemeContext = createContext({
    theme: createTheme(),
    mode: 'light',
    toggleColorMode: () => { },
});
export function ThemeContextProvider({ children }) {
    const value = useColorTheme();
    return (_jsx(ThemeContext.Provider, { value: value, children: children }));
}
export const useThemeContext = () => {
    return useContext(ThemeContext);
};
