import React from 'react';
import { FiArrowLeft, FiHeart, FiMail, FiUser, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <h1>PsyHeart</h1>
          <FiHeart size={40} />
        </div>

        <form>
          <h2>Faça seu cadastro</h2>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="create">
          <FiArrowLeft />
          Voltar para login
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignUp;
