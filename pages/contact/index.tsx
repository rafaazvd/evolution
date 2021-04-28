import React, { useEffect, useState } from 'react'

import {
  Container,
} from './styles';
import Header from '../components/Header';
// import Footer from '../components/Footer';
import SideBar from '../components/SideBar';


const Solutions: React.FC = () => {
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
         <div >
            <h1>- Building</h1>
            
         </div>
    
     </div>
    </Container>
  )
}
export default Solutions
