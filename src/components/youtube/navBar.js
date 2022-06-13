//Packages
import React from 'react';
//CSS stylesheet
import '../youtube/yt/styles.css';
import SideBar from '../sideBar/sideBar';
import {NavBarData} from './navBarData';
import './sidebar.css';
import {Navbar,Container,Button} from 'react-bootstrap';
const NavBar=(props)=>{
        return (
            <div className='purple-background'>
                <Navbar style={{margin:"auto",width:"80%"}} key="false"  expand="false" className="mb-3 purple-background">
                    <Container fluid>
                        <a href="https://www.speedlabs.in/" target="_blank" rel="noopener noreferrer">
                                    <img width="40px" height="40px" alt="SpeedLabs Logo" src="https://api.speedlabs.in/img/sl-logo.82c5b017.png"/>
                        </a>
                        <div style={{height:"30px",display:"inline"}}>
                                <div className="SidebarList" style={{display:"inline"}}>
                                        {NavBarData.map((val,key)=>{
                                            return (
                                                <a 
                                                    style={{color:"white"}}
                                                    className='listrow' 
                                                    key={key} 
                                                    id = {window.location.pathname === val.link ? "active" : ""}
                                                    onClick={()=>{window.location.pathname = val.link}}>
                                                    <div style={{display:"inline"}} id="title">
                                                        {val.title}
                                                    </div>
                                                </a>
                                            )
                                        })}
                                </div>
                        </div>
                        <Button rel="noopener noreferrer" href="/" variant="primary" style={{border:"solid black 2px",backgroundColor:"#6d3088"}}>LogOut</Button>
                        {/*<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-false`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                                    YOUTUBE DASHBOARD
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <SideBar/>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        */}
                    </Container>
                </Navbar>       
            </div>
        )
}

export default NavBar;


    