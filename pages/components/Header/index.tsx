import React from 'react'
import { GrLinkedinOption } from 'react-icons/gr'
import { FiFacebook, FiInstagram } from 'react-icons/fi'

import {
  Container,
  LogoImg,
  Ptbr,
  AreaStore,
  AreaEnrollment,
  RightComponent,
} from './styles';

const Dashboard: React.FC = () => {
  function checkDevice() {
    if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true; // está utilizando celular
    }

    return false; // não é celular
  }
  if (checkDevice()) {
    alert('Nao temos ainda uma versao mobile disponivel, acessa pelo navegador de seu computador para uma melhor experiencia');
  }
  return (
    <Container>
      <LogoImg src="/raio.png" />
      <div className="div-button">
        <a href="/" className="header-button">
          Home
        </a>
        <a href="/" className="header-button">
        Soluções
        </a>
        <a href="/" className="header-button">
        Sobre nós
        </a>
        <a href="/" className="header-button">
        Clientes 
        </a>
        <a href="/" className="header-button">
        Blog
        </a>
        <a href="/" className="header-button">
        Contato
        </a>
      </div>
     
    </Container>
  )
}
export default Dashboard
