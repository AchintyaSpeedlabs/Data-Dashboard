import React,{useEffect,useState} from 'react'
import NavBar from '../navBar';
import LineChart from "./lineChart";
import ShowBarChart from "./showBarChart";
import * as d3 from 'd3';
import datafile from './subscriptiondata.csv';
import {Container,Dropdown,DropdownButton} from 'react-bootstrap';
import {ViewBarChartData}  from './viewbardata';
import {WatchTimeBarChartData} from './watchtimedata';
import {SubsciberBarChartData} from './subscribers';
import {SubGainBarChartData} from './subgained';
import {SubLostChartData} from './sublost';

const date = [];
const subscriptionstatus = [];
const views = [];

function SubscriptionStats() {
  const [charttype,setChartType] = useState("status");
  const [type,setType] = useState("view");
  const [subtype,setSubType] = useState("subscribers");
  /*const [dat,setDate] = useState([]);
  const [substatus,setSubStatus] = useState([]);
  const [view,setViews] = useState([]);
  const [check,setCheck] = useState(false);
  const [lineData, setLineData] = useState({labels:[] ,
    datasets: [
      {
        label: '',
        backgroundColor: [
          "#2a71d0",
        ],
        data: [],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  */
  /*function requestDate(){
    for(const d of date){
      let dates = {
          dte:d
      }
      setDate(prevState => [...prevState,dates]);
    }
    //setCheck(false);
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
                "red",
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
  */
  const viewchart = (<ShowBarChart color="#2a71d0" label="Views" bdata={ViewBarChartData}/>);
  const watchchart = (<ShowBarChart color="#ecf0f1" label="Watch Time" bdata={WatchTimeBarChartData}/>);

  const subscribers = (<ShowBarChart color="#50AF95" label="Subscribers" bdata={SubsciberBarChartData}/>);
  const subgained = (<ShowBarChart color="#f3ba2f" label="Subcribers Gained" bdata={SubGainBarChartData}/>);
  const sublost = (<ShowBarChart label="Subscribers Lost" bdata={SubLostChartData}/>);

  return (
    <div> 
      <NavBar title="Subscription Stats"/> 
      <Container>
        <DropdownButton
            variant="outline-secondary"
            title="Subscription"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item onClick={()=>{setChartType("status");}} href="#">Subscription Status</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={()=>{setChartType("source");}} href="#">Subscription Source</Dropdown.Item>
        </DropdownButton>
        {charttype === "status" && 
            <div style={{marginLeft:"6%"}}>
              <div style={{marginLeft:"40%"}}>
                <button onClick={()=>{setType("view");}}>Views</button>
                <button onClick={()=>{setType("watch");}}>Watch Time</button>  
              </div>
                <div style={{width:"1080px"}}>
                  {type === "view" && viewchart}
                  {type === "watch" && watchchart}
                  <h2 style={{textAlign:"center"}}>Subscription Status</h2>
                </div>
            </div>
        }
        {charttype === "source" && 
          <div style={{marginLeft:"6%"}}>
            <div style={{marginLeft:"30%"}}>
              <button onClick={()=>{setSubType("subscribers");}}>Subscribers</button>
              <button onClick={()=>{setSubType("subgain");}}>Subscribers Gained</button> 
              <button onClick={()=>{setSubType("sublost");}}>Subscribers Lost</button>   
            </div>
            <div>
              <div style={{width:"1080px"}}>
                {subtype === "subscribers" && subscribers}
                {subtype === "subgain" && subgained}
                {subtype === "sublost" && sublost}
                <h2 style={{textAlign:"center"}}>Subscription Source</h2>
              </div>
            </div>
          </div>
        }  
      </Container>
      <br/>
    </div>
  )
}

export default SubscriptionStats 