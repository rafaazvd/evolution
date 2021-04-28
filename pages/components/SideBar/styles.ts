import styled from 'styled-components';



interface Props {
  top?: number;
  width?: number;
  size?: number;
  top1?: number;
  width1?: number;
  size1?: number;
  left1?: number;
  left2?: number;
  topMax?: number;
}

export const Container = styled.div`
position: fixed;
display: flex;
flex-direction: column;
padding: 1px;
width: 70%;
height: 100vh;
background-color: #B9D;
top: 0;
`;

export const LogoImg = styled.img`
  width: 15%;
  margin: 7%;
  margin-left: 4%;

`;


export default Container;
