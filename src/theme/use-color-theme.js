import { createTheme } from '@mui/material';
import React from 'react';
import getDesignTokens from './theme';
const useColorTheme = () => {
    const [mode, setMode] = React.useState('light');
    const toggleColorMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    const modifiedTheme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    return { theme: modifiedTheme, mode, toggleColorMode };
};
export default useColorTheme;
