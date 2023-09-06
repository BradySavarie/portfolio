import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Stack, Typography, Grid, Link, IconButton, useMediaQuery, } from '@mui/material';
import TechnologyTagList from './styles/TechnologyTagList.styled';
import { useThemeContext } from '../theme/ThemeContextProvider';
import liveLinkIcon from '../assets/liveLinkIcon.png';
import githubLinkIcon from '../assets/githubIcon__primary.png';
export default function ProjectCard({ imageSrc, title, description, techNames, githubLink, liveLink, }) {
    const { theme } = useThemeContext();
    const isMediumBreakpoint = useMediaQuery(theme.breakpoints.down('md'));
    const isLargeBreakpoint = useMediaQuery(theme.breakpoints.down('lg'));
    return (_jsxs(Stack, { direction: isLargeBreakpoint ? 'column' : 'row', sx: {
            width: '100%',
            alignItems: 'center',
        }, children: [_jsx(Container, { disableGutters: true, sx: {
                    paddingX: 2,
                    paddingY: 6,
                    display: 'flex',
                    justifyContent: 'center',
                }, children: _jsx("img", { src: imageSrc, alt: "Audio Effects Mockup", width: isMediumBreakpoint ? '100%' : '500px' }) }), _jsx(Container, { disableGutters: true, sx: {
                    maxWidth: isLargeBreakpoint ? '100%' : '50%',
                    height: 'min-content',
                    paddingX: 6,
                    paddingY: 4,
                    bgcolor: theme.palette.mode === 'light'
                        ? theme.palette.primary.light
                        : 'rgba(255, 255, 255, .05)',
                    borderRadius: theme.shape.borderRadius,
                    boxShadow: theme.shadows[1],
                }, children: _jsxs(Stack, { direction: "column", spacing: 2, children: [_jsx(Typography, { variant: "subtitle2", sx: { color: theme.palette.text.primary }, children: title }), _jsx(Typography, { variant: "body1", sx: { color: theme.palette.text.secondary }, children: description }), _jsx(Grid, { container: true, children: _jsx(TechnologyTagList, { techNames: techNames }) }), _jsxs(Grid, { container: true, item: true, children: [_jsx(Grid, { item: true, sx: { marginLeft: '-6px' }, children: _jsx(Link, { href: liveLink, target: "_blank", rel: "noopener noreferrer", children: _jsx(IconButton, { sx: { margin: 0 }, children: _jsx("img", { src: liveLinkIcon, alt: "Live Link", height: "40px" }) }) }) }), _jsx(Grid, { item: true, children: _jsx(Link, { href: githubLink, target: "_blank", rel: "noopener noreferrer", children: _jsx(IconButton, { sx: { margin: 0 }, children: _jsx("img", { src: githubLinkIcon, alt: "Github Project Link", height: "40px" }) }) }) })] })] }) })] }));
}
