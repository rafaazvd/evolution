import styled from 'styled-components';

export const Container = styled.div`
position: fixed;
width: 100%;
height: 25%;
bottom: 0;

@media(max-width: 540px) {
    position: relative;
    height: 270px;
  }
`;



export const Footer = styled.footer`
  background-color: #82A1AE;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-top: 18px;
`;

export const CenterComponent = styled.div`
    display: flex;
    justify-content: right;
    height: 100%;
    padding: 22px;
    padding-top: 10%;
    padding-left: 10%;

    a  {
        margin-right: 35px;
    }
    @media(max-width: 540px) {
      height: 44%;
      padding-top: 1%;
      margin-left: 30%;
      flex-direction: column;
      a  {
        margin-right: 1px;
        margin-bottom: 25px;
    }
    }
`;

export const RightComponent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    height: 100%;
    text {
        margin-top: 70px;
        & + text {
            margin-top: 10px;
        }
    }
`;


export const Img8 = styled.img`
  width: 7%;
  height: 27%;
  margin-left: 20px;
  @media(max-width: 540px) {
    position: absolute;
    width: 70px;
    height: 67px;
    
  }
`;
export const TextFooter = styled.text`
  color: #ffffff;
  font-size: 14px;
  a {
    text-decoration: none;
    color: #273746;
  }
`;

export const SmallFooter = styled.small`
  position: absolute;
  color: #ffff;
  bottom: 0;
  @media(max-width: 540px) {
    margin-left: -20px;
  }
`;

export const Enrollment = styled.button`
  margin-top: 0;
  position: absolute;
  background-color: #e83c4d;
  border: none;
  color: #ffffff;
  width: 20%;
  height: 16%;
  border-radius: 6px;
  margin-left: 40%;
  span {
    font-size: 160%;
  }
  @media(max-width: 540px) {
    margin-top: -16px;
    width: 50%;
    margin-left: 27%;
  }
`;


export default Container;
