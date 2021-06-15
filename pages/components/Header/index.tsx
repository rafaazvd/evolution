import React from 'react'

import {
  Container,
  LogoImg,
} from './styles';

const Dashboard: React.FC = () => {
  
  return (
    <Container>
      <LogoImg src="/favicon.png" />
      <div className="div-button">
        <a href="/" className="header-button">
          Home
        </a>
        <a href="/solutions" className="header-button">
        Soluções
        </a>
        <a href="/about" className="header-button">
        Sobre nós
        </a>
        <a href="/" className="header-button">
        Blog
        </a>
        <a href="/contact" className="header-button">
        Contato
        </a>
      </div>
     
    </Container>
  )
}
export default Dashboard
