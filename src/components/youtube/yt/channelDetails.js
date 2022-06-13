//Packages
import React from 'react';
import {Card,Row,Col} from 'react-bootstrap';
import { IconContext } from "react-icons";
import {VscEye,VscAccount,VscDebugContinueSmall} from "react-icons/vsc";
//CSS stylesheets
import './styles.css';
//To display channel data using Semantic UI Grid
const ChannelDetails=(props)=>{
        return (
                <Row style={{marginLeft:"4%"}} xs={2} md={3} className="g-4">
                    <Col>
                        <Card style={{color:"white",backgroundColor:"#6d3088",borderRadius:"0.313rem",width: '25rem' , height : '10rem'}}>
                            <Card.Body>
                                <Row>
                                   <Col>
                                        <IconContext.Provider value={{ style: {color:"white",width:"8em",height:"8em" } }}>
                                            <VscEye/>
                                        </IconContext.Provider>
                                   </Col> 
                                   <Col>
                                    <Card.Text style={{textAlign:"center"}}>
                                        <h1>{props.viewcount}</h1>
                                        <h2>Views</h2>
                                    </Card.Text>
                                   </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        {/*<div>
                            <h3>Title:{props.title}</h3>
                            <h3>Description:{props.description}</h3>
                            <h3>Video Count:{props.videocount}</h3>
                            <h3>Views:{props.viewcount}</h3>
                            <h3>Subscribers:{props.subscribers}</h3>
                        </div>*/} 
                    </Col>
                    <Col>
                        <Card style={{color:"white",backgroundColor:"#6d3088",borderRadius:"0.313rem", width: '25rem' , height : '10rem' }}>
                            <Card.Body>
                                <Row>
                                   <Col>
                                        <IconContext.Provider value={{ style: {color:"white",width:"8em",height:"8em" } }}>
                                            <VscDebugContinueSmall/>
                                        </IconContext.Provider>
                                   </Col> 
                                   <Col>
                                        <Card.Text style={{textAlign:"center"}}>
                                            <h1>{props.videocount}</h1>
                                            <h2>Video Count</h2>
                                        </Card.Text>
                                   </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{color:"white",backgroundColor:"#6d3088",borderRadius:"0.313rem", width: '25rem' , height : '10rem' }}>
                            <Card.Body>
                                <Row>
                                   <Col>
                                        <IconContext.Provider value={{ style: {color:"white",width:"8em",height:"8em" } }}>
                                            <VscAccount/>
                                        </IconContext.Provider>
                                   </Col> 
                                   <Col>
                                        <Card.Text style={{textAlign:"center"}}>
                                            <h1>{props.subscribers}</h1>
                                            <h2>Subscribers</h2>
                                        </Card.Text>
                                   </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*<div className="eight wide column">
                        <img className='channel-image' alt="Profile" src={props.thumbnail}/>
                    </div>*/}
                </Row>
        )
}

export default ChannelDetails;


    