//Packages
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import datafile from './subscriptiondata.csv';
//Components
import ChannelDetails  from './yt/channelDetails';
import VideoDetail from './yt/videoDetails';
import NavBar from './navBar';
import {Container,Row,Col,Card,Button} from 'react-bootstrap';
import LineChart from "./lineChart";
//CSS stylesheets
import '../youtube/yt/styles.css'
//API credentials
const apiKey = "AIzaSyBnENzjvROf4sgs-hdKu1T9Q3mT344EVKM";
const apiUrl = "https://www.googleapis.com/youtube/v3";
const term = "UCoxIjrCyzbaTnOtZdhwxM7g";
 

const date = [];
const subscriptionstatus = [];
const views = [];

//App component
const YT=(props)=>{
    //Main stucture of Dashboard 
    const [type,setType] = useState("view");
    const [subtype,setSubType] = useState("subscribers");
    const [dat,setDate] = useState([]);
    const [substatus,setSubStatus] = useState([]);
    const [view,setViews] = useState([]);
    const [check,setCheck] = useState(false);
    const [lineData, setLineData] = useState({labels:[] ,
        datasets: [
        {
            label: '',
            backgroundColor: [
            "#6d3088",
            ],
            data: [],
            borderColor: "black",
            borderWidth: 2,
        },
        ],
    });

    function requestDate(){
        for(const d of date){
        let dates = {
            dte:d
        }
        setDate(prevState => [...prevState,dates]);
        }
    } 
    function requestSub(){
        for(const d of subscriptionstatus){
        setSubStatus(prevState => [...prevState,d]);
        }
    } 
    function requestViews(){
        for(const d of views){
        let vs = { 
            vi:d
        }
        setViews(prevState => [...prevState,vs]);
        }
        setCheck(true);
    } 
    useEffect(()=>{
        d3.csv(datafile).then(data=>{
        for(var i = 0;i < data.length;i++){
            date.push(data[i].Date);
            subscriptionstatus.push(data[i].Subscriptionstatus);
            views.push(data[i].Views);
        }
        requestDate();
        requestSub();
        requestViews();

        setLineData(
        {
            labels: dat.map((d)=>d.dte),
            datasets: [
                {
                label: 'Views',
                backgroundColor: [
                    "#6d3088",
                ],
                data: view.map((v)=>v.vi),
                borderColor: "black",
                borderWidth: 2,
                },
            ],
        });
        }).catch(err=>{
        console.log(err);
        })
    },[check]);
    return (
        <div>
            <NavBar title="Youtube Dashboard"/>
            {/*<iframe title={title} style={{marginLeft:"40%"}} height="90px" width="300px" frameBorder="0" src={`https://socialcounts.org/youtube-live-subscriber-count/${term}/embed`} allowFullScreen></iframe>*/}
            <Container>
                <h3>Dashboard</h3>
                <hr/>
                {/*Passing data from API*/}
                <ChannelDetails
                            title={props.title}
                            description={props.description}
                            subscribers={props.subscribers}
                            videocount={props.videocount}
                            viewcount={props.viewcount}
                            thumbnail={props.thumbnail}
                />
                <br/>
                <Row style={{marginLeft:"4%"}} xs={2} md={2} className="g-4">
                    <Col>
                        <div>
                            <LineChart chartData={lineData} />
                            <h4 style={{textAlign:"center"}}>Date</h4>
                        </div>
                    </Col>
                    <Col>
                        <Card style={{marginLeft:"35%",width: '25rem',height:'30rem'}}>
                            <Card.Img height="200px" variant="top" src={props.thumbnail} />
                            <Card.Body>
                                <Card.Title>{props.title}</Card.Title>
                                <Card.Text>
                                    {props.description}
                                </Card.Text>
                                <Button target="_blank" href="https://www.youtube.com/channel/UCoxIjrCyzbaTnOtZdhwxM7g" variant="primary" style={{backgroundColor:"#6d3088"}}>Visit Channel</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <VideoDetail id={props.id}/>
            </Container>
            <br/>
        </div>
    )
}

export default YT;