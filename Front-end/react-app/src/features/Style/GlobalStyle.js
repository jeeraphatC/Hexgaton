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
  textarea {
    width: 100%; /* Set the width to 100% of its container */
    padding: 10px 400px 10px 10px; /* Add some padding */
    font-size: 16px; /* Set the font size */
    border-radius: 5px; /* Add rounded corners */
    border: 1px solid #ccc; /* Add a border */
    /* Add any other styles you want here */
    
  }
  
    }
    label2 {
       font-size:25px;
       color:#0071BE;
    }
    .divpostjob2 {
      background-color: #FFF;
      padding: 50px;
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      z-index: 100;
      width: 60%;
      
    margin-top:355px;
      position: absolute; /* You can use 'fixed' instead if you want it to stay fixed on the screen */
      top: 50%; /* Positions the top edge of the element at the vertical center */
      left: 50%; /* Positions the left edge of the element at the horizontal center */
      transform: translate(-50%, -50%); /* Moves the element back by half of its own size */
    }
    .divpostjob {
      background-color: #FFF;
      padding: 50px;
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      z-index: 100;
      width: 60%;
      
    margin-top:520px;
      position: absolute; /* You can use 'fixed' instead if you want it to stay fixed on the screen */
      top: 50%; /* Positions the top edge of the element at the vertical center */
      left: 50%; /* Positions the left edge of the element at the horizontal center */
      transform: translate(-50%, -50%); /* Moves the element back by half of its own size */
    }
    .textff2{
      text-align: center;
      margin-top:10px;
      font-size:20px;
      color:#FFF;

    }
    .textff1{
      text-align: center;
      margin-top:10px;
      font-size:20px;
      color:white;
      color:#6c757d;

    }
    .postffdiv3 {
      width: 130px;
      height: 50px;
      margin: 0px auto; /* This centers the element horizontally */
      background-color: #0196FC;
      border-radius:10px;
      display: inline-block;
      margin:10px;
    }
    .postffdiv2 {
      width: 130px;
      height: 50px;
      margin: 0px auto; /* This centers the element horizontally */
      background-color: #e9ecef;
      border-radius:10px;
      display: inline-block;
      margin:10px;
      cursor:pointer;
    }
    .textjob2{
      text-align: center;
      margin-top:10px;
      font-size:20px;
      color:#6c757d;
    }
    .textjob1{
      text-align: center;
      margin-top:10px;
      font-size:20px;
      color:white;
    }
    .postjobdiv3:hover {
      background-color:#dee2e6;
    }

    .postjobdiv3 {
      width: 130px;
      height: 50px;
      margin: 0px auto; /* This centers the element horizontally */
      background-color: #e9ecef;
      border-radius:10px;
      display: inline-block;
      margin:10px;
    }
    .postjobdiv2 {
      width: 130px;
      height: 50px;
      margin: 0px auto; /* This centers the element horizontally */
      background-color: #0196FC;
      border-radius:10px;
      display: inline-block;
      margin:10px;
      cursor:pointer;
    }
    .postjobdiv1 {
      width: 300px;
      height: 70px;
      margin: 0px auto; /* This centers the element horizontally */
      background-color: FFF;
      box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.1);
      border-radius:10px;

    }

.con{
  margin:50px;
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

    width: 100%;
    
  }

  .forgetpass2:hover{
    color: #0071BE;
    cursor: pointer;
    font-size: 18px;
  }
 .forgetpass:hover{
    color: #0071BE;
    cursor: pointer;
    font-size: 18px;
  }
  .forgetpass3{
    font-size: 17px;
    position: absolute;
    margin-top:100px;
    color: #CCC;
    left:50%;
  }
  .forgetpass2{
    font-size: 17px;
    position: absolute;
    margin-top:100px;
    color: #CCC;
    left:53%;
    transition: all 0.2;
  }

.forgetpass{
  font-size: 17px;
  position: absolute;
  margin-top:100px;
  color: #CCC;
  left:35%;
  transition: all 0.2;
}
.mail-logo{
  max-width:35px;
    position: absolute;
    margin-left: 85%;
    margin-top: 10px;
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
  .card2{
    width: 700px;
    border:0px;
    height:850px;
    box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);
    z-index:150;
  }
  .card{
    width: 700px;
    border:0px;
    height:550px;
    box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);
  }
  .big-logo {
    position: relative;
    width: 300px;
    margin-top:20px;
    margin-bottom:20px;
  }
  .biglogo-container{
    display: flex;
    justify-content: center;
    margin:50px;
  }
.logintext:hover{
  color:  #0196FC;
}
.logintext{
  position:absolute;
  margin:20px;
  font-size:25px;
  color:#D9D9D9;
  left:67%;
  top:10%;
}
.regtext:hover{
  color: #0196FC;
}
.regtext{
  position:absolute;
  font-size:25px;
  color:#0071BE;
  top:10%;
  margin:20px;
}
.logintext2:hover{
  color: #0196FC;
}
.logintext2{
  position:absolute;
  margin:20px;
  font-size:25px;
  
 color:#0071BE;
}
.regtext2:hover{
  color: #0196FC;
}
.regtext2{
  position:absolute;
  margin:20px;
  font-size:25px;
  left:81%;
  color:#D9D9D9;
}
  .form-text{
   
  }

  .form-control{
    border:0px;
    padding:20px;
    height: 60px;
    margin-top:40px;
    border-bottom:1px solid #D9D9D9;
    border-radius:0;
    color:#0071BE;
    font-size:20px;
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
    margin-top:-50px;
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
    margin-top: 70%;
    margin-left: 20%;
  }
  .svg7{
    margin-top: -3%;
    margin-left: 70%;
  }
.form-file{
  margin-left:40px;
    margin-right:40px;
    margin-top:30px;

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
.footer-content{
  position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 500px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    margin:2600px 0px 0px 0px;
    z-index:105;
}
.footertext1{
  margin-top: 0px;
  top:50%;
  left:400px;
  color: #9C9C9C;
font-family: Bebas Neue;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 150%; 
letter-spacing: -0.22px;
position: absolute;
}
.footertext2{
  margin-top: 0px;
  top:50%;
  left:900px;
  color: #9C9C9C;
font-family: Bebas Neue;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 150%; 
letter-spacing: -0.22px;
position: absolute;
}
.footertext3{
  margin-top: 0px;
  left:10px;
  top:10px;
  color: #FFF;
font-family: Bebas Neue;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: 150%; 
position: absolute;
}
.footertext4{
  margin-top: 0px;
  left:1090px;
  top:10px;
  color: #FFF;
font-family: Bebas Neue;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: 150%; 
position: absolute;
}
.footertext5{
  margin-top: 0px;
  left:1220px;
  top:10px;
  color: #FFF;
font-family: Bebas Neue;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: 150%; 
position: absolute;
}
.footertext6{
  margin-top: 0px;
  left:1320px;
  top:10px;
  color: #FFF;
font-family: Bebas Neue;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: 150%; 
position: absolute;
}
.footer-content2{
  position: absolute;
  left: 50%;
  top:100%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 50px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  z-index:105;
  background: #0071BE;
}
.big_logofooter{
  max-width: 300px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
}


.bg1{
  width:800px;
height:1200px;
position:absolute;
z-index:50;
}
//feature-bar
.btn-add-first   {
    float : right ;
    background-color : #0196FC;
    border: 2px solid #0196FC;
    position: absolute;
     }

.btn-add-sec{
  color: white;
}
  .btn-add-first:hover 
 {
 
    float : right ;
    background-color : #0071BE;
    border: 2px solid #0071BE;
  }


  /**CHAT  */
  .formContainer {
    background-color: #a7bcff;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .formWrapper {
      background-color: white;
      padding: 20px 60px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;

      .logo {
        color: #5d5b8d;
        font-weight: bold;
        font-size: 24px;
      }

      .title {
        color: #5d5b8d;
        font-size: 12px;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 15px;

        input {
          padding: 15px;
          border: none;
          width: 250px;
          border-bottom: 1px solid #a7bcff;
          &::placeholder {
            color: rgb(175, 175, 175);
          }
        }

        button {
          background-color: #7b96ec;
          color: white;
          padding: 10px;
          font-weight: bold;
          border: none;
          cursor: pointer;
        }

        label {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #8da4f1;
          font-size: 12px;
          cursor: pointer;

          img {
            width: 32px;
          }
        }
      }
    }

    .home {
      background-color: #a7bcff;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;

      .container {
        border: 1px solid white;
        border-radius: 10px;
        width: 65%;
        height: 80%;
        display: flex;
        overflow: hidden;

        .sidebar {
          flex: 1;
          background-color: #3e3c61;
          position: relative;

          .navbar {
            display: flex;
            align-items: center;
            background-color: #2f2d52;
            height: 50px;
            padding: 10px;
            justify-content: space-between;
            color: #ddddf7;

            .logo {
              font-weight: bold;
            }

            .user {
              display: flex;
              gap: 10px;

              img {
                background-color: #ddddf7;
                height: 24px;
                width: 24px;
                border-radius: 50%;
                object-fit: cover;
              }

              button {
                background-color: #5d5b8d;
                color: #ddddf7;
                font-size: 10px;
                border: none;
                cursor: pointer;
              }
            }
          }

          .search {
            border-bottom: 1px solid gray;

            .searchForm {
              padding: 10px;

              input {
                background-color: transparent;
                border: none;
                color: white;
                outline: none;

                &::placeholder {
                  color: lightgray;
                }
              }
            }

            .userChat {
              padding: 10px;
              display: flex;
              align-items: center;
              gap: 10px;
              color: white;
              cursor: pointer;

              &:hover {
                background-color: #2f2d52;
              }

              img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                object-fit: cover;
              }

              .userChatInfo {
                span {
                  font-size: 18px;
                  font-weight: 500;
                }
                p {
                  font-size: 14px;
                  color: lightgray;
                }
              }
            }
          }

          .chat {
            flex: 2;

            .chatInfo {
              height: 50px;
              background-color: #5d5b8d;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 10px;
              color: lightgray;
            }

            .chatIcons {
              display: flex;
              gap: 10px;

              img {
                height: 24px;
                cursor: pointer;
              }
            }

            .messages {
              background-color: #ddddf7;
              padding: 10px;
              height: calc(100% - 160px);
              overflow: scroll;

              .message {
                display: flex;
                gap: 20px;
                margin-bottom: 20px;

                .messageInfo {
                  display: flex;
                  flex-direction: column;
                  color: gray;
                  font-weight: 300;

                  img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    object-fit: cover;
                  }
                }

                .messageContent {
                  max-width: 80%;
                  display: flex;
                  flex-direction: column;
                  gap: 10px;

                  p {
                    background-color: white;
                    padding: 10px 20px;
                    border-radius: 0px 10px 10px 10px;
                    max-width: max-content;
                  }

                  img {
                    width: 50%;
                  }

                  &.owner {
                    flex-direction: row-reverse;

                    .messageContent {
                      align-items: flex-end;
                      p {
                        background-color: #8da4f1;
                        color: white;
                        border-radius: 10px 0px 10px 10px;
                      }
                    }
                  }
                }
              }

              .input {
                height: 50px;
                background-color: white;
                padding: 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                input {
                  width: 100%;
                  border: none;
                  outline: none;
                  color: #2f2d52;
                  font-size: 18px;

                  &::placeholder {
                    color: lightgray;
                  }
                }

                .send {
                  display: flex;
                  align-items: center;
                  gap: 10px;

                  img {
                    height: 24px;
                    cursor: pointer;
                  }

                  button {
                    border: none;
                    padding: 10px 15px;
                    color: white;
                    background-color: #8da4f1;
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  
  `;

export default GlobalStyle;
