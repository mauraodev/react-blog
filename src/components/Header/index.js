import React from 'react';

import Burguer from '../Burguer';


import { Container } from './styles';


const Header = () => {
  return (
    <Container>
      <div className="web">
        <Burguer />
        
      </div>
    </Container>
  );
};

export default Header;
