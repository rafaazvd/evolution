import React, { useEffect, useState } from 'react'

import {
  Container,
} from './styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';


const Solutions: React.FC = () => {
  const [data, setData] = useState<any>([
    {
      name: 'Rafael Azevedo',
      about: 'Bacharel em Ciências da Computação, Desenvolvedor Sênior FullStack com Dominio em Arquitetura DDD e TDD e Boas práticas  de programação alinhadas aos Princípios SOLID',
      img: '/rafa3.png',
      sector: 'CTO'
    },
    {
      name: 'Gustavo Mantagute',
      about: 'Mobilizador social há mais de uma década e comunicador visual com dezenas de trabalhos já realizados; estudos acadêmicos e autodidatas em Ciências Sociais e Design; graduando em Comércio Exterior.',
      img: '/manta.png',
      sector: 'Comunicação Visual'
    },
    {
      name: 'Nicolas Leviski',
      about: 'Estudante e profissional de negócios desde 2015. Envolvido desde a adolescência com trabalhos filantrópicos voluntários. 3 vezes coordenador estadual do Paraná da maior organização estudantil do mundo, coordenando de 15 a 112 voluntários no estado. 3 anos consecutivos premiado como um dos principais coordenadores da organização no país, uma vez premiado por um dos 3 melhores eventos estudantis do Brasil no ano. Primeiro brasileiro representante universitário da mais antiga e tradicional fundação de estudos econômicos pró livre mercado dos Estados Unidos, já sendo premiado como um dos 10 principais entre mais de 100 no mundo na época, ganhando a viagem para a última edição da maior conferência de economia do planeta, realizada por essa fundação nos EUA. Citado em matéria da UOL em 2016, aos 21 anos, como um dos 4 principais jovens mobilizadores sociais do Brasil por conta de trabalhos realizados na área. Grande experiência em gestão de projetos e equipes, organização de eventos e mídias sociais.',
      img: '/nick.jpeg',
      sector: 'Comunicação Visual'
    },
    {
      name: 'Alvaro Moraes',
      about: 'Curitibano, contador e empreendedor, nascido em 3 de novembro de 1982. Formado em Ciências Contábeis pela FAE Business School, empreendeu no ramo de alimentação de 2009 a 2011, foi presidente da 1º Câmara de Arbitragem, Mediação e Conciliação Societária do Brasil, um dos idealizadores da Cooperativa Brasileira de Contadores, entusiasta de criptomoedas, foi aluno do RenovaBR, escola para políticos, foi candidato a Vereador pelo Partido Novo em 2020 na capital Paranaense e atualmente é pós graduando em Escola Austríaca de Economia pelo Instituto Mises e aluno da Fundação Brasil Novo.',
      img: '/alvaro.png',
      sector: 'Comunicação Visual'
    },
  ]);

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
      <div className="div-about-1">
         <div className="div-about-2">
            <h1>- Sobre nós:</h1>
            <p>
            Somos uma empresa especializada em soluções para o crescimento de negócios locais e internacionais. Te ajudamos a alcançar mais pessoas, construir e expandir sua comunidade de clientes e se destacar no mercado. Visando um crescimento rápido e sustentável, selecionamos e combinamos as ferramentas digitais, estratégias e conhecimentos, consolidados e inovadores, da melhor forma para o seu negócio.
            </p>
            <p>
            Sabemos que é humanamente impossível entender bem de tudo, e, desde a primeira revolução industrial, vemos que a divisão do trabalho traz maior eficiência e melhor resultado final para os negócios. Por isso, contamos com uma equipe interna estrategicamente selecionada composta por 7 profissionais de diferentes áreas do conhecimento; com idades entre 21 e 56 anos, média de 32; naturais das regiões Sul, Centro-Oeste e Norte do Brasil; com experiências em 3 continentes e 10 países diferentes. Além disso, também contamos com uma equipe de consultores associados especialistas em outras 6 diferentes áreas dos negócios. Vem crescer conosco. Foque no que você faz de melhor enquanto nós te ajudamos com todo o resto.
            </p>
         </div>

         <h3>
         Equipe - Setor:

         </h3>
     
        {
          data.map((employee: any) => 
            <div className="div-about-3" key={employee.id}>
              <div className="about-div-img">
                <img className="about-img-employee" src={employee.img} />
              </div>
              <div className="div-about-4">
                <span className="span-name">
                  {employee.name}
                </span>
                <span className="span-sector">
                  {employee.sector}
                </span>
                <small className="span-about">
                  {employee.about}
                </small>
              </div>
              
            </div>
          )
        }
        <div className="div-about-5">
          <h1>
          Consultores Especializados Associados:
          </h1>
          <div>
            <span>Antonio - Gestão Empresarial: </span>
            <small>
            Desenvolvimento de Business Plan, MVP, Análise SWOT, Análise 5W2H, Canvas, Como Elaborar Fluxo de Caixa, Desenvolvimento de Branding e Posicionamento
            </small>
          </div>
          <div>
            <span>Álvaro - Contabilidade </span>
            <small>
            Geral e Consultoria em Planejamento e Gestão Financeira Pessoal e Corporativa
            </small>
          </div>
          <div>
            <span>Bruno Max - Direito Empresarial </span>
            <small>e Societário</small>
          </div>
          <div>
            <span>Alessandro - Vendas</span>
            <small>
            , Consultoria e Treinamento Completo
            </small>
          </div>
          <a  href = "mailto: rafa.azevedo7777@gmail.com" > Enviar e-mail </a>
        </div>
     </div>
      <Footer />
    </Container>
  )
}
export default Solutions
