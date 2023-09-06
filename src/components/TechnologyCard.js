import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useThemeContext } from '../theme/ThemeContextProvider';
export default function TechnologyCard({ src, techName }) {
    const { theme } = useThemeContext();
    const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'));
    return (_jsx(Grid, { item: true, children: _jsx(Stack, { direction: "column", spacing: 0.5, sx: {
                textAlign: 'center',
                width: '90px',
                height: '100px',
                alignItems: 'center',
                justifyContent: 'space-between',
            }, children: _jsxs(motion.div, { initial: { x: isSmallBreakpoint ? 0 : 50, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                    type: 'spring',
                    stiffness: 50,
                    delay: isSmallBreakpoint ? 0 : 0.25,
                }, children: [_jsx("img", { src: src, alt: "Technology Icon", width: "70%" }), _jsx(Typography, { variant: "body1", sx: { color: 'text.secondary' }, children: techName })] }) }) }));
}
