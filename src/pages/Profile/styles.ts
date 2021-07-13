import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  > header {
    height: 120px;
    background: #28262e;

    display: flex;
    align-items: center;

    svg {
      color: #ffffff;
      width: 24px;
      height: 24px;
      margin-left: 180px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  margin: -80px auto 0;

  width: 60%;

  form {
    margin: 50px 0;
    max-width: 340px;
    text-align: center;

    h2 {
      margin-bottom: 24px;
      color: #ffffff;
      font-size: 20px;
      text-align: left;
    }
  }
`;

export const AvatarInput = styled.div`
  margin-top: 24px;
  position: relative;
  height: 300px;
  width: 225px;

  img {
    width: 250px;
    height: 300px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #fb1528;
    border-radius: 50%;
    border: 0;
    right: 0;
    bottom: 0;
    transition: background-color 0.2s;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 20px;
      height: 20px;
      color: #ffffff;
    }

    &:hover {
      background: ${shade(0.2, '#fb1528')};
    }

    input {
      display: none;
    }
  }
`;
