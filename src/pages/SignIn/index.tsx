import React from 'react';
import { FiLogIn, FiHeart } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <h1>PsyHeart</h1>
          <FiHeart size={40} />
        </div>

        <form>
          <h2>Faça seu logon</h2>

          <input placeholder="E-mail" />

          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="create">
          <FiLogIn />
          Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
