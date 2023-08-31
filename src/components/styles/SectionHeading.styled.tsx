import { Box } from '@mui/material';
import styled from 'styled-components';

const SectionHeading = styled(Box)`
  background-color: ${({ theme }) => theme.palette.text.primary};
  color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  width: min-content;
  padding: ${({ theme }) => theme.spacing(0.5)}
    ${({ theme }) => theme.spacing(2)};
`;

export default SectionHeading;
