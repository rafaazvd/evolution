import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
:root {
  --text100: #248f8f;
  --primary200: #A6ACC1;
  --primary300: #9999ff;
  --primary400: #4E5882;
  --primary500: #212E63;
  --primary600: #1B254F;
  --primary700: #141C3C;
  --primary800: #0D1328;
  --primary900: #070914;
  --accent100: #FAD8DB;
  --accent200: #F6B1B8;
  --accent300: #F18A94;
  --accent400: #ED6371;
  --accent500: #E83C4D;
  --accent600: #BA303E;
  --accent700: #8B242E;
  --accent800: #5D181F;
  --accent900: #2E0C0F;
  --feedbackSuccess500: #14C87C;
  --feedbackSuccess600: #10A063;
}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /**
  Header Styles
   */
  .div-button {
    position: absolute;
    padding-left: 15%;
    padding-right: 20%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .header-button {
    width: 10%;
    display: flex;
    height: 100%;
    background-color: transparent;
    color: #000;
    align-items: center;
    justify-content: center;
    border: transparent;
    text-decoration: none;
    cursor: pointer;
    flex-direction: row;
    :hover
    {
      opacity:1;
      color: #ffd;
      border: solid 2px #dddd;
    }
  }
  /**
  Responsive
   */

  .div-button-responsive {
    position: absolute;
    width: 100%;
    padding: 22px;
    padding-top: 72px;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo-responsive-1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn-responsive-header {
    position: fixed;
    
  }

  .header-button-responsive {
    width: 100%;
    display: flex;
    height: 100%;
    color: #000;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
    :hover
    {
      opacity:1;
      color: #ffd;
      border: solid 2px #dddd;
    }
  }

  /**
  HomeStyles
   */
  .div-home-1 {
    background-color: #e6f2ff;
    padding: 17px;
    height: 274px;
    padding-top: 18%;
    padding-bottom: 17%;
    h1 {
      color: var(--text100);
      margin: 7px;
      margin-left: 15%;
      font-size: 30px;
    }
    @media(max-width: 540px) {
      padding-bottom: 77%;
    }
    
  }
  .div-span {
    margin-top: 5%;
    margin-left: 20%;
    width: 70%;
    
    p {
      color: var(--primary200);
      margin-left: 20%;
      text-align: justify;
    }
    small {
      color: var(--primary700);
      margin-left: 60%;
    }
    @media(max-width: 540px) {
      width: 81%;
      small {
      margin-left: 50%;
    }
    }
  }
  .div-home-2 {
    background-color: #ffe6ff;
    padding: 10%;
    p {
    color: var(--primary200);
  }
  }
  
  button {
    padding: 12px;
    background-color: #ffff;
    border: solid 1px #000;
    border-radius: 6px;
    margin-left: 77%;
    margin-top: 10%;
  }
  .title-home-2 {
    color: var(--text100);
    margin-bottom: 40px;
    @media(max-width: 540px) {
      font-size: 23px;
    }
  }
  .div-home-3 {
    background-color: #e6f2ff;
    padding: 27px;

    span {
      color: var(--primary200);
      
    }
    a {
      text-decoration: none;
      margin-top: 399px;
    }
  }
  .logo-home {
    margin-bottom: 422px;
    margin-top: 72px;
    width: 50%;
    margin-left: 20%;
    @media(max-width: 540px) {
      margin-bottom: 22px;
    }
  }

/**
Solutions page
 */
 .div-solutions-1 {
   padding: 92px;
   padding-top: 20%;
   padding-bottom: 22%;
   p {
     color: #5A513F;
     margin: 4%;
     font-weight: 900;
     font-size: 20px;
   }
   div {
     background-color: #ffff;
     border-radius: 12px;
     padding: 20px;
     margin-bottom: 17px;

     h3 {
       margin: 12px;
     }
     ul {
       display: flex;
       flex-direction: column;
       justify-content: center;
       li {
         margin-bottom: 20px;
       }
     }
     
   }
   @media(max-width: 540px) {
     div {
       width: 300px;
       margin-left: -40px;
     }
     p {
     margin: 1%;
     font-weight: 500;
     font-size: 17px;
   }
   h3 {
       margin: 1px;
     }
     h1 {
       font-size: 24px;
     }
   }

 }

 /**
 About page
 */
 .div-about-1 {
    background-color: #fff;
    padding: 72px;
    padding-top: 18%;
    padding-bottom: 27%;

    h3 {
      padding-bottom: 22px;
      font-weight: 800;
      font-size: 173%;
      color: #535348;
      text-align: center;
    }
    @media(max-width: 540px) {
      padding: 17px;
      padding-top: 18%;
      padding-bottom: 20%;
    }
  }
  .div-about-2 {
    background-color: #F1D1E0;
    padding: 77px;
    border-radius: 17px;
    margin-bottom: 156px;

    p {
      margin: 33px;
      text-align: justify;
      font-weight: 900;
      font-size: 22px;
      color: #2B423F;
    }
    @media(max-width: 540px) {
      border: solid 1px #000;
      padding: 22px;
      p {
        margin: 13px;
        font-weight: 500;
        font-size: 18px;
      }
    }
  }
  .div-about-3 {
    color: #000;
    display: flex;
    flex-direction: row;
  }
  .about-div-img {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1%;
    @media(max-width: 540px) {
      width: 120%;
    }
  }
  .about-img-employee {
    border-radius: 50%;
    max-width: 122px;
    max-width: 122px;
    max-height: 122px;
    min-height: 122px;
    
  }
  .div-about-4 {
    padding: 1%;
    padding-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
  .span-name {
    margin: 0 2% 2% 0;
    font-weight: 700;
    color: #525C5D;
    font-size: 144%;
    @media(max-width: 540px) {
      font-size: 12px;
    }
  }
  .span-sector {
    margin: 0 0 2% 3%;
    font-weight: 300;
    color: #525C5D;
    font-size: 100%;
    @media(max-width: 540px) {
      font-size: 12px;
    }
  }
  .span-about {
    width: 70%;
    color: #000;
    font-size: 120%;
    @media(max-width: 540px) {
      width: 98%;
      font-size: 10px;
    }
  }
  .div-about-5 {
    margin-top: 33px;
    padding: 177px;
    border-radius: 20px;
    background-color: #EEEEEC;
    border: solid 1px #000;
    color: #34495E;

    div {
      width: 77%;
      margin: 33px;
    }

    h1 {
      margin: 7px;
      position: absolute;
      margin-top: -7%;
      margin-left: -7%;
    }

    span {
      font-weight: 900;
      font-size: 22px;
    }
    small {
      font-size: 20px;
    }
    @media(max-width: 540px) {
      padding: 66px;
      div {
        width: 100%;
        margin: 20px;
      }
      h1 {
        font-size: 15px;
      }
      span {
        font-size: 15px;
      }
      small {
        font-size: 15px;
      }
    }
  }

`
