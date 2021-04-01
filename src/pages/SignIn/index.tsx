import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { FiLogIn, FiHeart, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  const handleSubmit = useCallback((data: object) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Content>
        <div>
          <h1>PsyHeart</h1>
          <FiHeart size={40} />
        </div>

        <Form onSubmit={handleSubmit}>
          <h2>Faça seu logon</h2>

          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

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
