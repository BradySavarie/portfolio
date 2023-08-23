import { Button } from '@mui/material';
import styled from 'styled-components';

const DownloadResumeButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.text.primary};
  color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  white-space: nowrap;
`;

export default DownloadResumeButton;
