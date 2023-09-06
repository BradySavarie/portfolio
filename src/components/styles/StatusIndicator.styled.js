import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const StatusSpan = styled.span `
  /* Define variables here if needed */
  --size: 12px;
  --border: 10px;
  --green: #72ff7d;

  &.status {
    position: relative;
    display: inline-block;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    margin: var(--border);

    background: #72ff7d;

    &::before {
      background: #72ff7d;
      content: '';
      display: block;
      position: absolute;
      left: calc(-1 * var(--border) / 2);
      top: calc(-1 * var(--border) / 2);
      width: calc(var(--size) + var(--border));
      height: calc(var(--size) + var(--border));
      border-radius: 50%;
      animation: pulse 1.5s infinite ease-in;
    }
  }

  @keyframes pulse {
    from {
      transform: scale(0.5);
      opacity: 0.6;
    }

    to {
      transform: scale(1.5);
      opacity: 0;
    }
  }
`;
function StatusIndicator() {
    return _jsx(StatusSpan, { className: "status" });
}
export default StatusIndicator;
