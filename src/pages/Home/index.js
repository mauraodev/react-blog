import React from 'react';

import { ArrowBackIos } from '@material-ui/icons';


import { Container, Content, H1Content, H2Content, H3Content, H4Content } from './styles';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import ElasticCarousel from '../../components/ElasticCarousel';


function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <H1Content>
          <h1>
            texto de chamada ao site<p> centralizado em duas linhas</p>
          </h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            rutrum aliquet sem, a pellentesque felis placerat non. Nulla
            facilisi. Ut eu convallis magna. Nullam vel velit convallis Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum
            aliquet sem, a pellentesque felis placerat non. Nulla
          </h2>
          <div>
            <Button type="submit">PORTIFÓLIO</Button>
            <Button type="submit">CONTATO</Button>
          </div>
          <ArrowBackIos />
        </H1Content>
        <H2Content>
          <div>
            <h1>Título da seção</h1>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              rutrum aliquet sem, a pellentesque felis placerat non. Nulla
              facilisi. Ut eu convallis magna. Nullam vel velit convallis Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum
              aliquet sem, a pellentesque felis placerat non. Nulla
            </h2>
          </div>
        </H2Content>
        <H3Content>
          <div className="h3-title">
            <h1>
              CONHEÇA NOSSAS SOLUÇÕES EM DESENVOLVIMENTO E ENGENHARIA DE DADOS{' '}
            </h1>
          </div>
          <ElasticCarousel />
        </H3Content>
        <div className="h4-bg">
        <H4Content>
          <div className="h4-description">
            <h1>Título da seção</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum aliquet sem, a pellentesque felis placerat non. Nulla facilisi. Ut eu convallis magna. Nullam vel velit convallis
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum aliquet sem, a pellentesque felis placerat non. Nulla</p>
          </div>
          <div>
    
          </div>
        </H4Content>
        <Footer />
        </div>
      </Content>
    </Container>
  );
};

export default Home;
