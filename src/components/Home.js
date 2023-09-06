import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Grid, Stack, Typography, Container, IconButton, useMediaQuery, Link, } from '@mui/material';
import { motion } from 'framer-motion';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { useThemeContext } from '../theme/ThemeContextProvider';
import StatusIndicator from './styles/StatusIndicator.styled';
import linkedInIcon__light from '../assets/linkedInIcon__light.svg';
import linkedInIcon__dark from '../assets/linkedInIcon__dark.svg';
import githubIcon__light from '../assets/githubIcon__light.svg';
import githubIcon__dark from '../assets/githubIcon__dark.svg';
import heroImage__light from '../assets/heroImage__light.png';
import heroImage__dark from '../assets/heroImage__dark.png';
export default function Home() {
    const { theme } = useThemeContext();
    const isMediumBreakpoint = useMediaQuery(theme.breakpoints.down('md'));
    return (_jsx("section", { id: "home", children: _jsx(Box, { sx: {
                height: isMediumBreakpoint ? null : '100vh',
                bgcolor: 'secondary.main',
                paddingY: isMediumBreakpoint ? 6 : 12,
                paddingX: isMediumBreakpoint ? null : 11,
                display: 'flex',
            }, children: _jsx(Box, { sx: {
                    flex: 1,
                }, children: _jsxs(Stack, { direction: isMediumBreakpoint ? 'column-reverse' : 'row', spacing: theme.spacing(4), sx: {
                        height: isMediumBreakpoint ? null : '100%',
                        paddingX: isMediumBreakpoint ? null : theme.spacing(4),
                    }, children: [_jsxs(Stack, { direction: "column", spacing: 6, sx: { paddingX: isMediumBreakpoint ? theme.spacing(6) : null }, children: [_jsxs(Stack, { direction: "column", spacing: 1, children: [_jsx(Typography, { component: motion.div, animate: { x: 0 }, initial: { x: '-50vw' }, transition: { type: 'spring', stiffness: 40 }, variant: "h1", sx: { whiteSpace: 'nowrap' }, children: "Hi, I'm Brady \uD83D\uDC4B" }), _jsx(Typography, { component: motion.div, initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1 }, variant: "body1", children: "I'm a full stack developer with a foundation in the graphics production industry that is focused on building software that is visually-appealing, intuitive, fast, and scalable. Solving business problems via programming is what gets me up in the morning (with the help of a strong cup of coffee) and keeps me up at night. I love to code!" })] }), _jsxs(Grid, { container: true, children: [_jsxs(Grid, { container: true, item: true, sx: { marginBottom: theme.spacing(1) }, children: [_jsx(Grid, { item: true, sx: {
                                                        width: '32px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        marginLeft: '-6px',
                                                        marginRight: theme.spacing(1),
                                                    }, children: _jsx(PlaceOutlinedIcon, {}) }), _jsx(Grid, { item: true, children: _jsx(Typography, { children: "Ontario, Canada" }) })] }), _jsxs(Grid, { container: true, item: true, sx: { marginBottom: theme.spacing(4) }, children: [_jsx(Grid, { item: true, sx: {
                                                        marginLeft: '-6px',
                                                        marginRight: theme.spacing(1),
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }, children: _jsx(StatusIndicator, {}) }), _jsx(Grid, { item: true, sx: { display: 'flex', alignItems: 'center' }, children: _jsx(Typography, { children: "Available for hire" }) })] }), _jsxs(Grid, { container: true, item: true, spacing: 1, children: [_jsx(Grid, { item: true, sx: { marginLeft: '-6px' }, children: _jsx(Link, { href: "https://github.com/BradySavarie", target: "_blank", rel: "noopener noreferrer", children: _jsx(IconButton, { sx: { margin: 0 }, children: _jsx("img", { src: theme.palette.mode === 'light'
                                                                    ? githubIcon__light
                                                                    : githubIcon__dark, alt: "githubLogo" }) }) }) }), _jsx(Grid, { item: true, children: _jsx(IconButton, { sx: { margin: 0 }, children: _jsx("img", { src: theme.palette.mode === 'light'
                                                                ? linkedInIcon__light
                                                                : linkedInIcon__dark, alt: "linkedIn Logo" }) }) })] })] })] }), _jsx(Container, { disableGutters: true, sx: {
                                display: isMediumBreakpoint ? 'flex' : null,
                                justifyContent: isMediumBreakpoint ? 'center' : null,
                            }, component: motion.div, animate: { x: 0, rotateZ: 0 }, initial: { x: '50vw', rotateZ: 45 }, transition: { type: 'spring', stiffness: 40 }, children: _jsx("img", { src: theme.palette.mode === 'light'
                                    ? heroImage__light
                                    : heroImage__dark, alt: "Headshot", height: "367.19px" }) })] }) }) }) }));
}
