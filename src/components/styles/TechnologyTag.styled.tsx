import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

type TechnologyTagProps = {
  techName: string;
};

const StyledTechnologyTag = styled(Box)`
  padding: ${({ theme }) => theme.spacing(0.5)}
    ${({ theme }) => theme.spacing(2)};
  width: min-content;
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

function TechnologyTag(props: TechnologyTagProps) {
  const { techName } = props;
  return (
    <StyledTechnologyTag>
      <Typography variant="body2">{techName}</Typography>
    </StyledTechnologyTag>
  );
}

export default TechnologyTag;
