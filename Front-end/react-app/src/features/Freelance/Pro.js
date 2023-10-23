import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import bg2 from "../pic/bg2.jpg";
import user1 from "../pic/user.png";
import star from "../pic/star.png";
import { Container, Card, Col, Row } from "react-bootstrap";

function profiles({ className }) {
    return (
        <div className={className}>
            <img src={bg2} alt="" className="bg1" />
            <Container>
                <Row>
                    <Col md="4" style={{ marginTop: -300 }}>
                        <div className="c1-fix">
                            <img src={user1} alt="" className="user1" />
                            <div className="username">Lorem ipsum </div>
                            <div className="rating">Rating</div>
                            <img src={star} alt="" className="star" />

                            <div className="phead1">Skills</div>
                            <div className="pbody1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
                                justo volutpat, tincidunt ligula et, eleifend quam. Aliquam quam elit,
                                elementum sed diam id.Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed tristique justo volutpat,
                            </div>

                        </div>
                    </Col >
                    <Col md="4" style={{ marginTop: -300 }}>
                        <Card style={{ width: 800, marginTop: 20 }}>
                            <Card.Title style={{ padding: 20 }}>Work of Lorem ipsum</Card.Title>
                            <Card.Text style={{ marginLeft: 10 }}><a href="/home">
                                <div className="pbody21">Press to see more history</div>
                            </a></Card.Text>
                            <Row>
                                <Col md="3" style={{ margin: 20, marginLeft: 80 }}>
                                    <Card style={{ width: 300 }}>
                                        <Card.Body>
                                            <Card.Img variant="top" />

                                            <Card.Title>
                                                WEB DEV
                                            </Card.Title>
                                            <Card.Text>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                                tristique justo volutpat, tincidunt ligula et,
                                            </Card.Text>
                                            <Card.Footer>

                                                <div style={{ color: 'black' }}>Lorem ipsum</div>

                                            </Card.Footer>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md="3" style={{ margin: 20, marginLeft: 80 }}>
                                    <Card style={{ width: 300 }}>
                                        <Card.Body>
                                            <Card.Img variant="top" />
                                            <Card.Title>WEB DEV</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                                tristique justo volutpat, tincidunt ligula et,
                                            </Card.Text>
                                            <Card.Footer>
                                                <div style={{ color: 'black' }}>Lorem ipsum</div>
                                            </Card.Footer>
                                        </Card.Body>
                                    </Card>
                                </Col>
                           
                               
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row >
                    <Card style={{marginLeft : 550 , marginTop : 0, height : 150}}> 
                        <Card.Body>
                            <Card.Title>
                                <a href="/home">
                                    <div >Review</div>
                                </a>
                            </Card.Title>
                            <Card.Text>
                            
                            <Card.Text><img src={user1} alt="" className="reviewpro" /></Card.Text>
                            <Card.Text><div className="reviewname">Lorem ipsum</div></Card.Text>
                            <Card.Text ><div className="reviewbody">Awesome, I haven't ordered work yet but the work is finished.</div></Card.Text>
                            <Card.Text ><img src={star} alt="" className="reviewstar" /></Card.Text>
                            <Card.Text style={{marginLeft :-20}}><div className="reviewscore">5.0</div></Card.Text>
                            
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                </Row>
            </Container>
        </div >
    );
}

profiles.propTypes = {
    className: PropTypes.string.isRequired,
};

export default styled(profiles)`
  text-align: center;
`;
