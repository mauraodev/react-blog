import React from 'react';

import { Container } from './styles';


function Button({ children, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
}
// children foi usado para que o button pegue o texto da tela que for importada.
export default Button;
