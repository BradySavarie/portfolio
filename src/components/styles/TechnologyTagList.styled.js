import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import { useThemeContext } from '../../theme/ThemeContextProvider';
const StyledTechnologyTagList = styled(Box) `
  padding: ${({ theme }) => theme.spacing(0.5)}
    ${({ theme }) => theme.spacing(2)};
  width: max-content;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 1px solid
    ${({ theme }) => theme.palette.mode === 'light'
    ? theme.palette.text.primary
    : theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.mode === 'light'
    ? theme.palette.common.white
    : 'rgba(255, 255, 255, 0.25)'};

& > :first-child {
    color: ${({ theme }) => theme.palette.text.secondary}
`;
function TechnologyTagList(props) {
    const { theme } = useThemeContext();
    const { techNames } = props;
    return (_jsx(_Fragment, { children: techNames.map((element) => (_jsx(Grid, { item: true, sx: { marginRight: theme.spacing(1), marginBottom: theme.spacing(1) }, children: _jsx(StyledTechnologyTagList, { children: _jsx(Typography, { variant: "body2", children: element }, element) }, element) }, element))) }));
}
export default TechnologyTagList;
