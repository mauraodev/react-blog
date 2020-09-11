import React, { useState } from 'react';


import MenuList from '../MenuList';

import { Container } from './styles';

const Burguer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Container>
      <MenuList open={open}/>
    </>
  );
};

export default Burguer;
