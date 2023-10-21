import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


   @font-face {
    font-family: 'Bebas Neue';
    src: url('/path-to-BebasNeueRegular.eot');
    src: url('/path-to-BebasNeueRegular.eot?#iefix') format('embedded-opentype'),
         url('/path-to-BebasNeueRegular.woff') format('woff'),
         url('/path-to-BebasNeueRegular.ttf') format('truetype'),
         url('/path-to-BebasNeueRegular.svg') format('svg');
    font-weight: normal;
    font-style: normal;
  }
 
  
  body {
    margin: 0;
    font-family: 'Bebas Neue', sans-serif;
    
      text-decoration: none; 
  
  }

    * {
  box-sizing: border-box;
  
    }


  a {
    color: inherit;
    text-decoration: none;
  }

  form label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  form input {
    padding: 0.3rem 0.7rem;

    font-size: 1rem;
    line-height: 1.5;

    outline: none;

    border: 1px solid #ced4da;
    border-radius: 0.25rem;

    width: 100%;
    
  }

 

  
  
  .app-container {
    max-width: auto;
    position: absolute;
  }
  
  .min-logo {
    max-width:150px;
    position: absolute;
  }
  .containermt-4{
    display: flex;
    justify-content: center;
    padding:20px;
  }
  .card{
    width: 600px;
    border:0px;
    box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);
  }
  .big-logo {
    position: relative;
    width: 300px;
    
  }
  .biglogo-container{
    display: flex;
    justify-content: center;
    margin:50px;
  }

  .form-text{
   
  }

  .form-control{
    border:0px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    padding:20px;
    height: 60px;
    margin-top:30px;
  }
  .form-group{
    margin-left:40px;
    margin-right:40px;
    margin-top:30px;
  }
  .alogin{
    margin-left:50px;
    font-size:20px;
    font-weight: bold;
    position:absolute;
  }
  .form-container{
    
  }
  .asignup{
    color: #9C9C9C;
    margin-left:480px;
    font-size:20px;
    font-weight: bold;
  }
  .svg-container {
    
}
.svg-container{
    
}
  svg{
  position:absolute;
  }
  .svg2{
    margin-top: 200px;
  }
  .svg3{
    margin-top: 400px;
    margin-left: 20px;
  }
  .svg4{
    margin-top: 450px;
    margin-left: 1200px;
  }
  .svg5{
    margin-top: 300px;
    margin-left: 1420px;
  }
  .svg6{
    margin-top: 550px;
    margin-left: 400px;
  }
  .svg7{
    margin-top: 0px;
    margin-left: 1200px;
  }

  .btn btn-primary mt-4{
    display: block;
     margin: 0 auto;
     
  }
  .btnrge{
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
    
  .btn-large {
    width: 250px; /* กำหนดความกว้าง */
    height: 45px; /* กำหนดความสูง */
    font-size: 20px; /* กำหนดขนาดตัวอักษร */
  }
  
  `;

export default GlobalStyle;
