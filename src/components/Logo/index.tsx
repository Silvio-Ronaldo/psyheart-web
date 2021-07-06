import React from 'react';
import { FiHeart } from 'react-icons/fi';

import { Container } from './styles';

const Logo: React.FC = () => {
  return (
    <Container>
      <h1>PsyHeart</h1>
      <FiHeart size={40} />
    </Container>
  );
};

export default Logo;
