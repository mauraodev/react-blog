import React from 'react';

import { Container } from './styles';


const MenuList = ({ open }) => {

  return (
    <>
      <Container open={open}>
        <a href="home">HOME</a>
        <a href="portifolio">PORTIFÓLIO</a>
        <a href="contato">CONTATO</a>
      </Container>
    </>
  );
};

export default MenuList;
