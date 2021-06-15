import React, {useState} from 'react'
import { AiFillHome } from 'react-icons/ai'
import { IoMdBuild } from 'react-icons/io'
import { FcAbout } from 'react-icons/fc'
import { FaBlog } from 'react-icons/fa'
import { GrContact } from 'react-icons/gr'
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'

import {
  Container,
  LogoImg,
} from './styles';

const Dashboard: React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleSideBar = () => {
        setOpen(!open);
    }
  
  return (
      <>
      <button className="btn-responsive-header" type="button" onClick={() => handleSideBar()}>
    <BsReverseLayoutTextSidebarReverse size={30} />
      </button>
        {
            open && 
        <Container>
            <div className="logo-responsive-1">
            <LogoImg src="/favicon.png" />
            </div>
            <div className="div-button-responsive">
                <a href="/" className="header-button-responsive">
                    <AiFillHome size={20} />
                {'  _'}Home
                </a>
                <a href="/solutions" className="header-button-responsive">
                <IoMdBuild size={20} />
                {'  _'}Soluções
                </a>
                <a href="/about" className="header-button-responsive">
                <FcAbout size={20} />
                {'  _'}Sobre nós
                </a>
                <a href="/" className="header-button-responsive">
                <FaBlog size={20} />
                {'  _'}Blog
                </a>
                <a href="/contact" className="header-button-responsive">
                <GrContact size={20} />
                {'  _'}Contato
                </a>
            </div>
     
         </Container>
        }
      
      </>
  )
}
export default Dashboard
