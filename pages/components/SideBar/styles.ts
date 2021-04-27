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

export const RightComponent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 25%;
    padding: 0;
    align-items: center;
    margin: 7px;
`;

export const LogoImg = styled.img`
  width: 15%;
  margin: 7%;
  margin-left: 4%;

`;


export const AreaEnrollment = styled.button`
  background-color: #e83c4d;
  border: none;
  color: #ffffff;
  border-radius: 4px;
  padding: 5px;
`;

export const AreaStore = styled.button`
  background-color: #212e63;
  border: none;
  color: #ffffff;
  border-radius: 4px;
  padding: 5px;
  span {
    font-size: 100%;
  }

`;
export const Ptbr = styled.img`
  width: 17%;
  height: 7.4%;

  
  @media(min-width: 1900px) {
    width: 3%;
    height: 2%;
  }
`;


export default Container;
