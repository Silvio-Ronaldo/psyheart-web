import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #fb1528;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: ${shade(0.8, '#5e5b52ff')};

    &::before {
      border-style: solid;
      border-color: #fb1528 transparent;
      border-width: 6px 6px 0 6px;
      bottom: 20px;
      content: '';
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
