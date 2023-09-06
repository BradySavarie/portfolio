import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography, Box, Stack, Container, useMediaQuery, } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeading from './styles/SectionHeading.styled';
import { useThemeContext } from '../theme/ThemeContextProvider';
import aboutPhoto__light from '../assets/aboutPhoto__light.png';
import aboutPhoto__dark from '../assets/aboutPhoto__dark.png';
export default function About() {
    const { theme } = useThemeContext();
    const isMediumBreakpoint = useMediaQuery(theme.breakpoints.down('md'));
    return (_jsx("section", { id: "about", children: _jsx(Box, { sx: {
                width: '100vw',
                paddingY: 12,
                paddingX: isMediumBreakpoint ? 4 : 10,
                display: 'flex',
                flexDirection: 'column',
                bgcolor: theme.palette.mode === 'light'
                    ? theme.palette.common.white
                    : 'rgba(255,255,255,.025)',
            }, children: _jsx(Box, { sx: { flex: 1 }, children: _jsxs(Stack, { direction: "column", spacing: 6, sx: { alignItems: 'center' }, children: [_jsx(SectionHeading, { children: _jsx(Typography, { variant: "body2", children: "About" }) }), _jsxs(Stack, { direction: isMediumBreakpoint ? 'column' : 'row', spacing: 6, children: [_jsx(Container, { disableGutters: true, sx: {
                                        display: 'flex',
                                        justifyContent: isMediumBreakpoint ? 'center' : 'left',
                                        marginBottom: isMediumBreakpoint ? 'null' : theme.spacing(6),
                                        marginRight: isMediumBreakpoint ? 'null' : theme.spacing(14),
                                    }, component: motion.div, initial: { x: '-25vw', rotateZ: -45 }, whileInView: { x: 0, rotateZ: 0 }, transition: { type: 'spring', stiffness: 40 }, children: _jsx("img", { src: theme.palette.mode === 'light'
                                            ? aboutPhoto__light
                                            : aboutPhoto__dark, alt: "Personal Photograph", height: "400px" }) }), _jsxs(Stack, { direction: "column", spacing: 2, children: [_jsx(Typography, { variant: "h2", sx: { whiteSpace: 'nowrap' }, children: "Getting Personal: Who Am I?" }), _jsx(Typography, { variant: "body1", children: "I am a self-proclaimed developer who specializes in building full-stack software applications (preferably using Typescript, React, and Node.js). I'm enthusiastic about creating a top-notch UX while maintaining a visually appealing design, and producing code that strikes a balance between clarity and efficiency is something I genuinely care about." }), _jsx(Typography, { children: "My time spent working in graphics production has taught me how to blend technical precision with visual finesse (while juggling many projects, often under tight deadlines) and my game plan is to translate that experience into developing some killer software applications." }), _jsx(Typography, { children: "When I'm not in developer mode you can find me performing music with my friends, working up a sweat at the gym, or kicking back and enjoying some free time with my family." }), _jsx(Typography, { children: "Wrapping it up, a few quick details about me." }), _jsx("ul", { style: { paddingLeft: 14 }, children: _jsxs(Stack, { direction: "row", children: [_jsxs(Stack, { direction: "column", spacing: 1, sx: { marginRight: 2 }, children: [_jsx("li", { children: _jsx(Typography, { children: "Education in Business" }) }), _jsx("li", { children: _jsx(Typography, { children: "Management and entrepreneurial experience" }) })] }), _jsxs(Stack, { direction: "column", children: [_jsx("li", { children: _jsx(Typography, { children: "Proficient in graphic design and project management" }) }), _jsx("li", { children: _jsx(Typography, { children: "Dedicated to improving my skillset" }) })] })] }) }), _jsx(Typography, { children: "One last thing - I'm searching for full-time employment but I am also available for freelance work, so feel free to reach out and say hello!" })] })] })] }) }) }) }));
}
