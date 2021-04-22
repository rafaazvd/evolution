import React from 'react'
import { GrLinkedinOption } from 'react-icons/gr';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

import {
  Container,
  Img8,
  Footer,
  TextFooter,
  SmallFooter,
  Enrollment,
  CenterComponent,
  RightComponent,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Enrollment>
        <span>Cadastre-se</span>
      </Enrollment>
      <Footer>
        <Img8 src="raio.png" />
        <CenterComponent>
            <a
            href="https://www.instagram.com/offlet_app/"
            >
                <FiFacebook size={18} color="#ffffff" />
            </a>
            <a
            href="https://www.instagram.com/offlet_app/"
            >
                <FiInstagram size={18} color="#ffffff" />
            </a>
            <a
            href="https://www.instagram.com/offlet_app/"
            >
                <GrLinkedinOption size={18} color="#ffffff" />
            </a>
            <SmallFooter>© Copyright 2021 - Evolution</SmallFooter>
        </CenterComponent>

        <RightComponent>
            <TextFooter>Termos de Uso</TextFooter>
            <TextFooter>Política de Privacidade</TextFooter>
        </RightComponent>

      </Footer>
      
    </Container>
  )
}
export default Dashboard
