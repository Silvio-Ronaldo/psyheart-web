import styled from 'styled-components';
import { shade } from 'polished';

import signInBackground from '../../assets/red-heart-shadow.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  > div {
    width: 100%;
    max-width: 240px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      background-color: #fb1528;
      padding: 8px 16px;
      border-radius: 10px;
      color: #ffffff;
    }
  }

  form {
    margin: 80px 0;
    max-width: 340px;
    text-align: center;

    h2 {
      margin-bottom: 24px;
      color: #ffffff;
    }

    a {
      color: #ffffff;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.4, '#ffffff')};
      }
    }
  }

  > a {
    color: #fb1528;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#fb1528')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;
