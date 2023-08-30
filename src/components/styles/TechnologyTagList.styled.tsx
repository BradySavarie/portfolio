import { Box, Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import { useThemeContext } from '../../theme/ThemeContextProvider';

type TechnologyTagListProps = {
  techNames: string[];
};

const StyledTechnologyTagList = styled(Box)`
  padding: ${({ theme }) => theme.spacing(0.5)}
    ${({ theme }) => theme.spacing(2)};
  width: max-content;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  border: 1px solid
    ${({ theme }) =>
      theme.palette.mode === 'light'
        ? theme.palette.text.primary
        : theme.palette.common.white};
  background-color: ${({ theme }) =>
    theme.palette.mode === 'light'
      ? theme.palette.common.white
      : 'rgba(255, 255, 255, 0.25)'};

& > :first-child {
    color: ${({ theme }) => theme.palette.text.secondary}
`;

function TechnologyTagList(props: TechnologyTagListProps) {
  const { theme } = useThemeContext();
  const { techNames } = props;
  return (
    <>
      {techNames.map((element) => (
        <Grid
          key={element}
          item
          sx={{ marginRight: theme.spacing(1), marginBottom: theme.spacing(1) }}
        >
          <StyledTechnologyTagList key={element}>
            <Typography key={element} variant="body2">
              {element}
            </Typography>
          </StyledTechnologyTagList>
        </Grid>
      ))}
    </>
  );
}

export default TechnologyTagList;
