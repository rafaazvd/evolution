import React, { useEffect } from 'react'

import {
  Container,
} from './styles';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Solutions: React.FC = () => {
  
  return (
    <Container>
      <Header />
      <div className="div-solutions-1">
        <div>
            <h1>Panorama:</h1>
            <p>
            O mundo digital está cada vez mais presente em nossas vidas, e, com isso, compras e vendas pela internet têm crescido rapidamente, passando de R$100 bilhões só Brasil no último ano. Muitas empresas já faturam alto pela internet, e, com tantas restrições ao funcionamento físico de negócios desde o começo da pandemia, isso se torna cada vez mais necessário. E assim como tem crescido o público comprador no ambiente digital, a concorrência também está cada vez maior, sendo cada vez mais importante conhecer e saber utilizar as melhores estratégias e ferramentas de comunicação e marketing para destacar seu negócio no mercado.
            </p>
        </div>
        <div>
            <h1>
            Etapas:
            </h1>
            <p>
                <ul>
                    <li>1: Consultoria e Planejamento de Comunicação e Marketing: Estudo completo do perfil dos clientes compradores e Definição da persona alvo; Linha editorial e Melhores formas de Comunicação para um Crescimento Orgânico;</li>
                    <li>2: --/--; Criação ou atualização de identidade visual e logos; Criação ou atualização de site e perfis profissionais nas redes sociais; Produção de fotos e vídeos conceituais para seu negócio e produtos;</li>
                    <li>3: --/--; --/--; Planejamento e gestão com análise de métricas para impulsionamento de anúncios online;</li>
                    <li>4: --/--; --/--; --/--; Produção de conteúdo diário pras suas redes sociais; Interação com seguidores e influencers da área para maior alcance e engajamento; Identificação de oportunidades para parcerias; Produção de conteúdo para sua página de blog no seu site; Análise de métricas de crescimento orgânico.</li>
                </ul>
            </p>
        </div>
        <div>
            <h1>On Demand:</h1>
            <h3>Criação de vídeos para anúncios:</h3>
            <h3>Assessoria comercial especializada:</h3>
            <h3>Lançamento de Campanha, Evento online ou Produto:</h3>
            <p>
            Consultoria e Planejamento Completos de Comunicação e Marketing; Criação de artes, copys e headlines para anúncios e páginas de captação de leads; Criação de links e páginas; Planejamento e gestão de impulsionamento em anúncios online:
            </p>
            <h3>Espaço para reuniões com atendimento VIP:</h3>
        </div>
      </div>
      <Footer />
    </Container>
  )
}
export default Solutions
