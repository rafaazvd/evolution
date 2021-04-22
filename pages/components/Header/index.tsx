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
