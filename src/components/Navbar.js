import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Stack, Container, AppBar, Toolbar, Typography, Button, IconButton, Drawer, useMediaQuery, Divider, } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useThemeContext } from '../theme/ThemeContextProvider';
import DownloadResumeButton from './styles/DownloadResumeButton.styled';
export default function Navbar() {
    const { theme, mode, toggleColorMode } = useThemeContext();
    const [isOpen, setIsOpen] = useState(false);
    const isSmallScreen = useMediaQuery(theme.breakpoints.up('md'));
    const toggleDrawer = () => {
        setIsOpen((prev) => !prev);
    };
    const scrollToContact = (id) => {
        const sectionHeader = document.getElementById(`${id}`);
        if (sectionHeader) {
            sectionHeader.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(AppBar, { position: "sticky", sx: {
                    bgcolor: theme.palette.secondary.main,
                    boxShadow: 'none',
                }, style: { backgroundImage: 'none' }, children: _jsx(Container, { maxWidth: "lg", children: _jsxs(Toolbar, { children: [_jsx(Typography, { variant: "h6", component: "div", sx: {
                                    fontWeight: 600,
                                    flexGrow: 1,
                                    whiteSpace: 'nowrap',
                                    color: theme.palette.text.primary,
                                    '&:hover': {
                                        cursor: 'pointer',
                                    },
                                }, onClick: () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }), children: '<BRADY__SAVARIE />' }), _jsxs(Stack, { direction: "row", spacing: 3, display: { xs: 'none', sm: 'flex' }, sx: { marginLeft: 'auto' }, children: [_jsxs(Stack, { direction: "row", spacing: 2, display: { xs: 'none', md: 'flex' }, children: [_jsx(Button, { onClick: () => scrollToContact('projects'), sx: { color: theme.palette.text.secondary }, children: "Projects" }), _jsx(Button, { onClick: () => {
                                                    scrollToContact('technologies');
                                                }, sx: { color: theme.palette.text.secondary }, children: "Technologies" }), _jsx(Button, { onClick: () => scrollToContact('about'), sx: { color: theme.palette.text.secondary }, children: "About" }), _jsx(Button, { onClick: () => scrollToContact('contact'), sx: { color: theme.palette.text.secondary }, children: "Contact" })] }), _jsxs(Stack, { direction: "row", spacing: 2, sx: {
                                            height: theme.spacing(4),
                                        }, children: [_jsx(IconButton, { size: "large", edge: "start", onClick: toggleColorMode, children: mode === 'light' ? (_jsx(LightModeIcon, { sx: { color: theme.palette.text.primary } })) : (_jsx(DarkModeIcon, { sx: { color: theme.palette.text.primary } })) }), _jsx(DownloadResumeButton, { children: "Download Resume" })] })] }), isSmallScreen ? null : (_jsx(IconButton, { size: "large", onClick: toggleDrawer, sx: { marginLeft: theme.spacing(1) }, children: _jsx(MenuIcon, { sx: {
                                        color: theme.palette.text.primary,
                                    } }) }))] }) }) }), _jsxs(Drawer, { anchor: "right", open: isOpen, onClose: toggleDrawer, PaperProps: {
                    sx: {
                        bgcolor: theme.palette.secondary.main,
                    },
                }, children: [_jsx(Container, { children: _jsxs(Stack, { direction: "row", spacing: 2, sx: {
                                paddingY: theme.spacing(1),
                                width: `min(80vw, ${theme.breakpoints.values.sm}px)`,
                            }, children: [_jsx(Typography, { variant: "h6", component: "div", sx: {
                                        color: theme.palette.text.primary,
                                        fontWeight: 600,
                                        flexGrow: 1,
                                        whiteSpace: 'nowrap',
                                        alignSelf: 'center',
                                    }, children: '<BRADY__SAVARIE />' }), _jsx(IconButton, { size: "large", onClick: toggleDrawer, children: _jsx(CloseIcon, {}) })] }) }), _jsx(Divider, { role: "presentation", variant: "fullWidth" }), _jsx(Container, { sx: {
                            paddingY: theme.spacing(2),
                        }, children: _jsxs(Stack, { direction: "column", spacing: 1, sx: {
                                alignItems: 'left',
                            }, children: [_jsx(Button, { onClick: () => {
                                        toggleDrawer();
                                        scrollToContact('projects');
                                    }, sx: {
                                        width: 'min-content',
                                        color: theme.palette.text.secondary,
                                    }, children: "Projects" }), _jsx(Button, { onClick: () => {
                                        toggleDrawer();
                                        scrollToContact('about');
                                    }, sx: {
                                        width: 'min-content',
                                        color: theme.palette.text.secondary,
                                    }, children: "About" }), _jsx(Button, { onClick: () => {
                                        toggleDrawer();
                                        scrollToContact('technologies');
                                    }, sx: {
                                        width: 'min-content',
                                        color: theme.palette.text.secondary,
                                    }, children: "Technologies" }), _jsx(Button, { onClick: () => {
                                        toggleDrawer();
                                        scrollToContact('contact');
                                    }, sx: {
                                        width: 'min-content',
                                        color: theme.palette.text.secondary,
                                    }, children: "Contact" })] }) }), _jsx(Divider, { role: "presentation", variant: "fullWidth" }), _jsxs(Container, { children: [_jsxs(Stack, { direction: "row", spacing: 2, sx: {
                                    paddingY: theme.spacing(1),
                                    marginX: theme.spacing(1),
                                }, children: [_jsx(Typography, { variant: "body1", component: "div", sx: {
                                            color: theme.palette.text.primary,
                                            flexGrow: 1,
                                            whiteSpace: 'nowrap',
                                            alignSelf: 'center',
                                        }, children: "Switch Color Mode" }), _jsx(IconButton, { size: "large", edge: "start", onClick: toggleColorMode, children: mode === 'light' ? (_jsx(LightModeIcon, { sx: { color: theme.palette.text.primary } })) : (_jsx(DarkModeIcon, { sx: { color: theme.palette.text.primary } })) })] }), _jsx(Container, { sx: {
                                    paddingY: theme.spacing(1),
                                    marginX: theme.spacing(1),
                                    display: 'flex',
                                    justifyContent: 'center',
                                }, children: _jsx(DownloadResumeButton, { children: "Download Resume" }) })] })] })] }));
}
