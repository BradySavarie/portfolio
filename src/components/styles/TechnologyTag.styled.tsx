import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

type TechnologyTagProps = {
  techName: string;
};

const StyledTechnologyTag = styled(Box)`
  outline: 1px solid black;
  padding: ${({ theme }) => theme.spacing(0.5)}
    ${({ theme }) => theme.spacing(2)};
  width: min-content;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
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
