import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import getCookies from './hook/getCookies';
import arrow from "./pic/barrow.png";
import { useCookies } from 'react-cookie';

function ViewEnter({ className }) {
  const { id } = useParams();
  const [enterprise, setEnterprise] = useState(null);
  const [isChatButtonClicked, setChatButtonClicked] = useState(false);
  const [enterpriseImages, setEnterpriseImages] = useState({});
  const [image, setImage] = useState(null);
  const [workData,setWorkdata] = useState([]);
  const [status, setStatus] = useState({
    status: '',
  });
  const [account, setaccount] = useState();
  const [accId,setaccId] = useState();
  const [senderTochat,setSendertoChat] = useState();
      const [cookies, setCookie, removeCookie] = useCookies();

  const [nameTochat,setnameTochat] = useState();

  useEffect(() => {
    setaccId(getCookies('id'));

    axios.get(`https://dapper-advertisement-production.up.railway.app/getByNameAndImagelocation/account/${account}`, { responseType: 'arraybuffer' })
      .then(response => {
        const base64 = btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
        const imageSrc = `data:image/jpeg;base64,${base64}`;
        setImage(imageSrc);

      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  }, [account]);


  useEffect(() => {
    axios.get(`https://apathetic-laborer-production.up.railway.app/enterprises/${id}`)
      .then(response => {
        setEnterprise(response.data);
        setaccount(response.data.account.accountid)
        setSendertoChat(response.data.account.accountname)

        // Fetch enterprise image
        axios.get(`https://dapper-advertisement-production.up.railway.app/getByNameAndImagelocation/enterprises/${id}`, { responseType: 'arraybuffer' })
          .then(imageResponse => {
            const base64 = btoa(new Uint8Array(imageResponse.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
            const imageSrc = `data:image/jpeg;base64,${base64}`;
            setEnterpriseImages({ [id]: imageSrc });
          })
          .catch(error => {
            console.error('Error fetching image:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  if (!enterprise) {
    return <div>Loading...</div>;
  }

  const handleConfirmButtonClick = () => {
    const test_id = getCookies("id");
    const test_name = getCookies("username");
    setCookie('senderNameToChat',senderTochat)
  
    console.log("hello",test_id)
    const patchData = {
     shows : "no"
    };

    axios
      .patch(`https://apathetic-laborer-production.up.railway.app/enterprises/${id}`, patchData)
      .then((patchResponse) => {
        // Handle the PATCH response if needed
        console.log("PATCH Data:", patchResponse.data);
      })
      .catch((patchError) => {
        console.error("Error sending PATCH request:", patchError);
      });
  

    setChatButtonClicked(true);
    const statusData = {
      status: "process",
      enterprise: {
        id: id
      },
      account_name:test_name,
      account_id:test_id
    };


    const historyData = {
      account: {
        accountid: accId,
      },
      enterprise: {
        id: id
      }
    };
    axios
    .post(`https://apathetic-laborer-production.up.railway.app/historys/enterprise`, historyData)
    .then((historyResponse) => {
      // Handle the response if needed
      console.log("History Data:", historyResponse.data);
      setnameTochat(historyResponse.data.accountname);
      setCookie('chatName',nameTochat)
      // After saving history, update the status
      axios.post(`https://apathetic-laborer-production.up.railway.app/status`, statusData)
        .then((statusResponse) => {
          // Handle the status response if needed
          console.log("Status Data:", statusResponse.data);
        })
        .catch(error => {
          console.error('Error updating status:', error);
        });
    })
    .catch(error => {
      console.error('Error saving history:', error);
    });
};

  const isOwner = getCookies("id") == enterprise.account.accountid;

  return (
    <Container style={{ marginTop: 50, width: 800 }}>
      <div className={className}>
      <div style={{marginBottom:'20px'}}>
        <Link to="/" style={{ fontSize: '30px', marginTop: '30px', color: '#0071BE' }}>Home</Link>
        <img src={arrow} alt="" style={{ width: '30px', marginLeft: '10px', marginBottom: '10px' }} />
        <Link to="/optionfree" style={{ fontSize: '30px', marginTop: '30px', marginLeft: '10px', color: '#808080' }}>freelance</Link>
        <img src={arrow} alt="" style={{ width: '30px', marginLeft: '10px', marginBottom: '10px' }} />
        <Link to="/findjob" state={{ type: enterprise.type }} style={{ fontSize: '30px', marginTop: '30px', marginLeft: '10px', color: '#808080' }}>{enterprise.type}</Link>
</div>
        <Row>
          <Col md={6}>
          <Card style={{ borderRadius: 10, backgroundColor: '#E1F3FF  ',right:'20%' }}>
              
              <Card.Body>

              <Card.Img variant="top" style={{ width: '100%', height: '100%',borderRadius: 10,}} src={enterpriseImages[id]} />
                <h1 style={{ textAlign: 'center',marginTop:'50px',fontSize:'70px',color:'#0071BE'}}>{enterprise.name}</h1>
                <Card.Subtitle><p style={{fontSize:'30px' }}>{enterprise.description}</p></Card.Subtitle>
                <Card.Text><p style={{fontSize:'30px' }}> <strong>ExampleJob:&emsp;</strong> {enterprise.examplejob}</p></Card.Text>
                <Card.Text><p style={{fontSize:'30px' }}><strong>Workprocress:&emsp;</strong> {enterprise.workprocess}</p></Card.Text>
                <Card.Text><p style={{fontSize:'30px' }}><strong>Location:&emsp;</strong> {enterprise.location}</p></Card.Text>


              </Card.Body>
            </Card>

            <Card style={{ marginTop:'400px',height:'80px'}}>
              <Card.Body>
                <Row>
                  <Col md={3}>
                    <div className='container-profile'>
                    <Link to={`/profile/${enterprise.account.accountid}`}><Card.Img src={image} alt="" className="user1" /></Link>
                    </div>
                  </Col>
                  <Col md={3} style={{ marginTop: 0 }}>
                  <Link to={`/profile/${enterprise.account.accountid}`}> <Card.Text><p style={{fontSize:'30px',width:'200px',position:'absolute',marginLeft:'-100px',marginTop:'5px'}}>{enterprise.account.accountname}</p></Card.Text></Link>
                  <h1 style={{ marginLeft: 400,width:'200',position:'absolute',color:'#e9ecef',marginTop:'5px' }}>Poster</h1>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} >
          <Card style={{ marginLeft: 250, width: "20rem", padding: 20,backgroundColor:'#0196FC',color:'#FFF',fontSize:'30px' }}>
              <Card.Text><p>{enterprise.price}&nbsp;&nbsp;Baht</p></Card.Text>
              <Card.Text><p><strong>Time:&emsp;</strong> {enterprise.time}&nbsp;&nbsp;&nbsp;Days</p></Card.Text>
              <Card.Text><p>{enterprise.type}({enterprise.subtype})</p></Card.Text>

              {isChatButtonClicked ? (
                <Link to="/ChatRoom" >Chat</Link>
              ) : (
                isOwner ? (
                  <Link to={`/edit/${enterprise.id}`} className="editbtn"> edit </Link>
                ) : (
                  <button onClick={handleConfirmButtonClick} className="editbtn">Accept</button>
                )
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

ViewEnter.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(ViewEnter)`
.editbtn{
  text-align:center;
  color:#0196FC;
  width:200px;
  background: #FFF;
  border: 1px solid #FFF;
  border-radius:10px;
  margin-left:40px;
  margin-top:40px;
  transition: all 0.2s; 
}
.editbtn:hover{
  background: #e9ecef;

}
.container-profile {
  margin: 15px 43px;
  position: relative;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  overflow: hidden;
}

.user1{
  display: block;
  width: 60;
  height: 60;
  object-fit: cover;
  margin-top:0
}
h1 {
  color: #25daf9; 
  background: linear-gradient(to right, #0196fc, #25daf9); 
  -webkit-background-clip: text;
  color: transparent; 
  background-size: 200% 100%; 
  background-clip: text;
}
p{
  font-size: 20px;
}
.edit{
  color: #0196FC;
  padding:0px 30px 0px 30px ;
  border: 2px solid #000;
  transition: all 0.3s;
  border-radius: 5px;
  font-size:25px;
  text-align: center;
}

.edit:hover{
  color: #FFF;
  background: #0196FC;
  border: 2px solid #0196FC;
}
`;