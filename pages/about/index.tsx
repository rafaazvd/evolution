import React, { useEffect, useState } from 'react'

import {
  Container,
} from './styles';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Solutions: React.FC = () => {
  const [data, setData] = useState<any>([
    {
      name: 'Rafael Azevedo',
      about: 'Bacharel em Ciências da Computação, Desenvolvedor Sênior FullStack com Dominio em Arquitetura DDD e TDD e Boas práticas  de programação alinhadas aos Princípios SOLID',
      img: '/rafa.jpeg',
      sector: 'Desenvolvimento Web'
    },
    {
      name: 'Rafael Azevedo',
      about: 'Bacharel em Ciências da Computação, Desenvolvedor Sênior FullStack com Dominio em Arquitetura DDD e TDD e Boas práticas  de programação alinhadas aos Princípios SOLID',
      img: '/rafa.jpeg',
      sector: 'Desenvolvimento Web'
    },
    {
      name: 'Rafael Azevedo',
      about: 'Bacharel em Ciências da Computação, Desenvolvedor Sênior FullStack com Dominio em Arquitetura DDD e TDD e Boas práticas  de programação alinhadas aos Princípios SOLID',
      img: '/rafa.jpeg',
      sector: 'Desenvolvimento Web'
    },
  ]);

  

  return (
    <Container>
      <Header />
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
     </div>
      <Footer />
    </Container>
  )
}
export default Solutions
