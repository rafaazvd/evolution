import React, { useEffect } from 'react'

import {
  Container,
} from './styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import { redirect } from 'next/dist/next-server/server/api-utils';

// declare const navigator: any;

const Dashboard: React.FC = () => {
  const handleRedirect = () => {
    window.location.href = 'solutions';
  }
  let w = null;
  if (typeof window !== "undefined") {
    w = window.screen.availWidth
  }

  const maxWidth = 576;
	const availWidth = w;
  return (
    <Container>
      <div>
      {
        availWidth < maxWidth ? <SideBar /> : <Header />
      }
      </div>
      <div className="div-home-1">
        <h1>
        Ajudamos bons negócios a evoluírem seu alcance e lucro
        </h1>
        <div className="div-span">
          <p>
          "No futuro existirão apenas dois tipos de empresas,
          as que fazem negócios pela internet e as 
          que não fazem mais negócios"<br />
          </p>
          <small>
          - Bill Gates, em 1996
          </small>
        </div>
      </div>

      <div className="div-home-2">
        <h1 className="title-home-2">
        O FUTURO É AGORA
        </h1>
        <p>
        A internet está cada vez mais presente em nossas vidas. Alcance mais pessoas, construa e
        expanda sua comunidade de clientes e revolucione o seu mercado através das maiores e mais
        recentes ferramentas digitais aliadas às melhores estratégias e conhecimentos de negócios, das
        mais consolidadas às mais inovadoras. Conte com nossa equipe especializada. Foque no que
        você faz de melhor, enquanto te ajudamos com todo o resto.
        </p>
        <button className="btn-home-products" onClick={() => handleRedirect()}>
          Produtos
        </button>
      </div>
      
      <div className="div-home-3">
        <h1 className="title-home-2">
          - Alguns dos nossos conceitos:
        </h1>
        <span>
          EVOLUÇÃO, COMUNICAÇÃO, COMUNIDADE, PROSPERIDADE
        </span>
        <br />
        <br />
        <br />
        <a href="/about">
        - Sobre nós:
        </a>
        <br />
        <br />
        <br />
        <h1 className="title-home-2">
        Especialistas em crescimento de negócios
        </h1>
        <p>
        Somos uma empresa especializada em soluções para o crescimento de negócios locais e
        internacionais. Te ajudamos a alcançar mais pessoas, construir e expandir sua comunidade de
        clientes e se destacar no mercado. Visando um crescimento rápido e sustentável, selecionamos
        e combinamos as ferramentas digitais, estratégias e conhecimentos, consolidados e inovadores,
        da melhor forma para o seu negócio.
        </p>
        <img className="logo-home" src="/logo-home.png" />
      </div>
      
      <Footer />
    </Container>
  )
}
export default Dashboard
