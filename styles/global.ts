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
  }
  .div-home-2 {
    background-color: #ffe6ff;
    padding: 10%;
  }
  p {
    color: var(--primary200);
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

 }

 /**
 About page
 */
 .div-about-1 {
    background-color: #fff;
    padding: 72px;
    padding-top: 18%;
    padding-bottom: 117%;
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
  }
  .div-about-3 {
    color: #000;
    border-radius: 17px;
    display: flex;
    flex-direction: row;
  }
  .about-div-img {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1%;
  }
  .about-img-employee {
    border: solid 3px #55DF57;
    border-radius: 50%;
    width: 100%;
    height: 60%;
  }
  .div-about-4 {
    padding: 2%;
    padding-top: 130px;
    display: flex;
    flex-direction: column;
  }
  .span-name {
    margin: 2% 2% 2% 0;
    font-weight: 700;
    color: #525C5D;
    font-size: 144%;
  }
  .span-sector {
    margin: 0 0 2% 3%;
    font-weight: 300;
    color: #525C5D;
    font-size: 100%;
  }
  .span-about {
    width: 70%;
    color: #000;
    font-size: 120%;
  }

`
