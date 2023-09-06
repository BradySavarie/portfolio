import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Stack, Typography, Grid, useMediaQuery } from '@mui/material';
import SectionHeading from './styles/SectionHeading.styled';
import { useThemeContext } from '../theme/ThemeContextProvider';
import TechnologyCard from './TechnologyCard';
import html5Icon from '../assets/html5Icon.png';
import css3Icon from '../assets/css3Icon.png';
import javascriptIcon from '../assets/javascriptIcon.png';
import typescriptIcon from '../assets/typescriptIcon.png';
import reactIcon from '../assets/reactIcon.png';
import nodejsIcon from '../assets/nodejsIcon.png';
import viteIcon from '../assets/viteIcon.png';
import sassIcon from '../assets/sassIcon.png';
import muiIcon from '../assets/muiIcon.png';
import styledComponentsIcon from '../assets/styledComponentsIcon.png';
import tailwindIcon from '../assets/tailwindIcon.png';
import figmaIcon from '../assets/figmaIcon.png';
import jestIcon from '../assets/jestIcon.png';
import gitIcon from '../assets/gitIcon.png';
export default function Technologies() {
    const { theme } = useThemeContext();
    const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumBreakpoint = useMediaQuery(theme.breakpoints.down('md'));
    return (_jsx("section", { id: "technologies", children: _jsx(Box, { sx: {
                width: '100vw',
                bgcolor: 'secondary.main',
                paddingX: 10,
                paddingTop: 12,
                paddingBottom: theme.spacing(12),
                display: 'flex',
                flexDirection: 'column',
            }, children: _jsx(Box, { sx: {
                    flex: 1,
                    paddingX: isMediumBreakpoint ? null : theme.spacing(4),
                }, children: _jsxs(Stack, { direction: "column", spacing: 8, sx: { height: '100%' }, children: [_jsxs(Stack, { direction: "column", spacing: 2, sx: { alignItems: 'center' }, children: [_jsx(SectionHeading, { children: _jsx(Typography, { variant: "body2", children: "Technologies" }) }), _jsx(Typography, { variant: "subtitle1", sx: { textAlign: 'center', color: 'text.secondary' }, children: "Some of the skills, tools, and technologies I use often:" })] }), _jsx(Box, { sx: { flex: 1 }, children: _jsxs(Grid, { container: true, direction: "row", rowSpacing: isSmallBreakpoint ? 8 : 6, columnSpacing: isSmallBreakpoint ? 4 : 8, justifyContent: "center", children: [_jsx(TechnologyCard, { src: html5Icon, techName: "HTML5" }), _jsx(TechnologyCard, { src: css3Icon, techName: "CSS3" }), _jsx(TechnologyCard, { src: javascriptIcon, techName: "Javascript" }), _jsx(TechnologyCard, { src: typescriptIcon, techName: "Typescript" }), _jsx(TechnologyCard, { src: reactIcon, techName: "React" }), _jsx(TechnologyCard, { src: nodejsIcon, techName: "Nodejs" }), _jsx(TechnologyCard, { src: viteIcon, techName: "Vite" }), _jsx(TechnologyCard, { src: sassIcon, techName: "SASS" }), _jsx(TechnologyCard, { src: muiIcon, techName: "Material-UI" }), _jsx(TechnologyCard, { src: styledComponentsIcon, techName: "Styled-Components" }), _jsx(TechnologyCard, { src: tailwindIcon, techName: "Tailwind" }), _jsx(TechnologyCard, { src: figmaIcon, techName: "Figma" }), _jsx(TechnologyCard, { src: jestIcon, techName: "Jest" }), _jsx(TechnologyCard, { src: gitIcon, techName: "Git" })] }) })] }) }) }) }));
}
