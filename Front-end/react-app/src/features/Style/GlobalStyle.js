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
  

    height: 100%;
      text-decoration: none; /* ลบเส้นใต้เฉพาะเมื่อชี้ลงไปที่ลิงค์ */
  
  }

  a:link { text-decoration: none; }


a:visited { text-decoration: none; }


a:hover { text-decoration: none; }


a:active { text-decoration: none; }

    * {
  box-sizing: border-box;
  
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
    display: flex;
    flex-wrap: wrap;
  }
  
  .svg-container svg {
    width: 10%;
    height: 10%;
  }
  svg{
    position:absolute;
    
  }
  .svg2{
    height: auto;
    margin-top: 10%;
  }
  .svg3{
    margin-top: 35%;
    margin-left: 3%;
  }
  .svg4{
    margin-top: 20%;
    margin-left: 65%;
  }
  .svg5{

    margin-top: 30%;
    margin-left: 80%;
  }
  .svg6{
    margin-top: 30%;
    margin-left: 20%;
  }
  .svg7{
    margin-top: -3%;
    margin-left: 70%;
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
  .homelogo{
    max-width:100px;
    transition: all 0.2s;
  }
  .homelogo:hover{
  }
  .bg1{
    width:100%;
    height:10%;
  }
  .c1{
    width: 293px;
    height: 700px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    margin-left: 20%;
    top: 20%;
  }
  .c1-fix{
    width: 293px;
    height: 700px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  }
  .user1{
    max-width:200px;
    margin-top:30px;
  }
  .username{
    margin:20px 20px 0px 20px;
    font-size:40px;
    color:#0196FC;
  }
  .star{
    max-width:30px;
    margin-left:70px;
  }
  .rating{
    color:#FFC107;
    font-size:20px;
    position: absolute; 
    margin-left:100px;

  }
  .phead1{
    margin-top:30px;
    font-size:30px;
    color:#0196FC;
    font-weight: bold;
  }
  .pbody1{
    margin:10px 20px 20px 20px;
  }
  .c2{
    width: 500px;
    height: 700px;
    border-radius: 10px;
    background: #fff;
    position: absolute;
    margin-left: 40%;
    top: 60%;
  }
  .c3{
    width: 500px;
    height: 700px;
    border-radius: 10px;
    background: #fff;
    position: absolute;
    margin-left: 57%;
    top: 60%;
  }
  .phead2{
    font-size:30px;
    color:#000000;
    font-weight: bold;
    text-align: left;
  }
  
  .pbody21{
    font-size:15px;
    color:#959595;
    text-align: left;
  }
  .whead{
    font-size:20px;
    color:#000000;
    text-align: left; 
    font-weight: bold;
    margin-left: 10%;
    margin-top: 50%;
  }
  .wbody{
    font-size:12px;
    color:#959595;
    text-align: left; 
    font-weight: bold;
    margin:0% 10% 10% 10%;

  }
  .wfoot {
    border-radius: 0px 0px 10px 10px;
    background: #0196FC;
    width: 300px;
    height: 30px;
    position: absolute;
    bottom: 0;
  }
  
  .workcon {
    width: 300px;
    height: 300px;
    border-radius: 10px;
    background: #fff;
    position: absolute;
    top: 12%;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  }
  .wfootname {
    font-size: 15px;
  color: #fff;
  margin: 5px;
  display: inline-block;
  }
  .review{
    font-size:30px;
    color:#000000;
    font-weight: bold;
    position: absolute;
    margin-left: 40%;
    margin-top: 24%;
  }
  .reviewcon{
    width: 700px;
    height: 100px;
    border-radius: 10px;
    background: #fff;
    position: absolute;
    margin-left: 40%;
    margin-top: 27%;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  }
  .reviewname{
    font-size: 25px;
    position: absolute;
    margin: 20px 15px 15px 14%;
    color:#0071BE;
    font-weight: bold;
  }
  .reviewpro{
    max-width: 70px;
    margin: 15px 15px 15px 15px;
    position: absolute;
    left:0;

  }
  .reviewbody{
    font-size: 15px;
    position: absolute;
    margin: 60px 15px 15px 14%;
    color:#000000;
  }
  .reviewstar{
    max-width: 30px;
    position: absolute;
    margin: 40px 15px 15px 43%;
  }
  .reviewscore{
    font-size: 25px;
    position: absolute;
    margin: 40px 15px 20px 87%;
    color:#FFC107;
    font-weight: bold;
  }



  
  `;

export default GlobalStyle;
