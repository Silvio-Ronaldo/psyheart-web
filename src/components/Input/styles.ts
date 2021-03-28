import styled from 'styled-components';

export const Container = styled.div`
  background: #5e5b52ff;
  border-radius: 10px;
  border: 2px solid #5e5b52ff;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

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
