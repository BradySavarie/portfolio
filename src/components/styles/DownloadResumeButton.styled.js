import { Button } from '@mui/material';
import styled from 'styled-components';
const DownloadResumeButton = styled(Button) `
  background-color: ${({ theme }) => theme.palette.text.primary};
  color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  white-space: nowrap;
  transition: 0.15s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.palette.text.primary};
  }
`;
export default DownloadResumeButton;
