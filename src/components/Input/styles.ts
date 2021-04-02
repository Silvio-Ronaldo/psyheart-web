import styled, { css } from 'styled-components';
import { shade } from 'polished';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #5e5b52ff;
  border-radius: 10px;
  border: 2px solid #5e5b52ff;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  color: ${shade(0.4, '#5e5b52ff')};

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #dd8100;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #fb1528;
      color: #fb1528;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #fb1528;
    `}

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #ffffff;

    &::placeholder {
      color: #c3c3c3;
      opacity: 0.5;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #dd8100;
    color: #ffffff;

    &::before {
      border-color: #dd8100 transparent;
    }
  }
`;
