import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography, Stack } from '@mui/material';
import { useThemeContext } from '../theme/ThemeContextProvider';
import copyrightIcon__light from '../assets/copyrightIcon__light.svg';
import copyrightIcon__dark from '../assets/copyrightIcon__dark.svg';
export default function Footer() {
    const { theme } = useThemeContext();
    return (_jsx(Box, { sx: {
            width: '100vw',
            paddingY: 3,
            paddingX: 10,
            bgcolor: theme.palette.mode === 'light'
                ? theme.palette.common.white
                : 'rgba(255,255,255,.025)',
        }, children: _jsxs(Stack, { direction: "row", spacing: 2, sx: { display: 'flex', justifyContent: 'center', alignItems: 'center' }, children: [_jsx("img", { src: theme.palette.mode === 'light'
                        ? copyrightIcon__light
                        : copyrightIcon__dark, alt: "Copyright Icon" }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { whiteSpace: 'nowrap' }, children: "2023 | Coded with \u2764\uFE0F\uFE0F by Brady Savarie" })] }) }));
}
