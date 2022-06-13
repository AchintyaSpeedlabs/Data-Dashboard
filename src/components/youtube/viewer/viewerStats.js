import React,{useState} from 'react'; 
import NavBar from '../navBar';
import PieShow from './pieShow';

import {AgeViewChartData} from './data/ageView';
import {AgeAvgViewChartData} from './data/ageViewDuration';
import {AgeViewPerChartData} from './data/ageViewPer';
import {AgeWatchPerChartData} from './data/ageWatchPer';
import {GenderViewChartData} from './data/genderView';
import {GenderAvgViewChartData} from './data/genderViewDuration';
import {GenderViewPerChartData} from './data/genderViewPer';
import {GenderWatchPerChartData} from './data/genderWatchPer';
import {ViewPieChartData} from './data/viewData';
import {WatchTimeChartData} from './data/watchtime';
import {ViewBarChartData}  from './data/viewbardata';
import {WatchTimeBarChartData} from './data/watchtimedata';
import {SubsciberBarChartData} from './data/subscribers';
import {SubGainBarChartData} from './data/subgained';
import {SubLostChartData} from './data/sublost';

import {Container,Dropdown,DropdownButton} from 'react-bootstrap';
  
import ShowBarChart from './showBarChart';

function ViewerStats() { 
  const [statype,setStatype] = useState("Viewer");
  const [charttype,setChartType] = useState("Age");
  const [agetype,setAgeType] = useState("view");
  const [gendertype,setGenderType] = useState("view");
  const [type,setType] = useState("view");
  const [subtype,setSubType] = useState("subscribers");


  const ageviewchart = (<ShowBarChart color="#2a71d0" label="Views%" bdata={AgeViewChartData}/>);
  const ageviewdurationchart = (<ShowBarChart color="#2a71d0" label="Avg. View Duration" bdata={AgeAvgViewChartData}/>);
  const ageviewperchart = (<ShowBarChart color="#2a71d0" label="Avg. View %" bdata={AgeViewPerChartData}/>);
  const agewatchperchart = (<ShowBarChart color="#2a71d0" label="Watch Time %" bdata={AgeWatchPerChartData}/>);

  const genderviewchart = (<ShowBarChart color="#50AF95" label="Views%" bdata={GenderViewChartData}/>);
  const genderviewdurationchart = (<ShowBarChart color="#50AF95" label="Avg. View Duration" bdata={GenderAvgViewChartData}/>);
  const genderviewperchart = (<ShowBarChart color="#50AF95" label="Avg. View %" bdata={GenderViewPerChartData}/>);
  const genderwatchperchart = (<ShowBarChart color="#50AF95" label="Watch Time %" bdata={GenderWatchPerChartData}/>);

  const viewchart = (<ShowBarChart color="#2a71d0" label="Views" bdata={ViewBarChartData}/>);
  const watchchart = (<ShowBarChart color="#ecf0f1" label="Watch Time" bdata={WatchTimeBarChartData}/>);

  const subscribers = (<ShowBarChart color="#50AF95" label="Subscribers" bdata={SubsciberBarChartData}/>);
  const subgained = (<ShowBarChart color="#f3ba2f" label="Subcribers Gained" bdata={SubGainBarChartData}/>);
  const sublost = (<ShowBarChart label="Subscribers Lost" bdata={SubLostChartData}/>);

  return (
    <div>
      <NavBar title="Viewer Stats"/> 
      <Container>
          <div>
            <DropdownButton style={{display:"inline",marginRight:"2%"}}
                variant="outline-secondary"
                title={statype}
                id="input-group-dropdown-1"
              >
                <Dropdown.Item onClick={()=>{setStatype("Viewer");setChartType("Age");}} href="#">Viewer</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={()=>{setStatype("Subscription");setChartType("Status");}} href="#">Subscription</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={()=>{setStatype("Traffic");setChartType("Views");}} href="#">Traffic</Dropdown.Item>
            </DropdownButton>
            {statype === "Subscription" && 
              <DropdownButton style={{display:"inline"}}
                  variant="outline-secondary"
                  title={charttype}
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item onClick={()=>{setChartType("Status");}} href="#">Status</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={()=>{setChartType("Source");}} href="#">Source</Dropdown.Item>
              </DropdownButton>
            }
            {statype === "Traffic" && 
              <DropdownButton style={{display:"inline"}}
                  variant="outline-secondary"
                  title={charttype}
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item onClick={()=>{setChartType("Views");}} href="#">Views</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={()=>{setChartType("Watch-time");}} href="#">Watch Time</Dropdown.Item>
              </DropdownButton>
            }
            {statype === "Viewer" && 
              <DropdownButton style={{display:"inline"}}
                  variant="outline-secondary"
                  title={charttype}
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item onClick={()=>{setChartType("Age");}} href="#">Age</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={()=>{setChartType("Gender");}} href="#">Gender</Dropdown.Item>
              </DropdownButton>
            }
          </div>

          {charttype === "Status" && 
                <div style={{marginLeft:"9%"}}>
                  <div style={{marginLeft:"40%"}}>
                    <button onClick={()=>{setType("view");}}>Views</button>
                    <button onClick={()=>{setType("watch");}}>Watch Time</button>  
                  </div>
                    <div style={{width:"1000px"}}>
                      {type === "view" && viewchart}
                      {type === "watch" && watchchart}
                      <h2 style={{textAlign:"center"}}>Subscription Status</h2>
                    </div>
                </div>
            }
            {charttype === "Source" && 
              <div style={{marginLeft:"9%"}}>
                <div style={{marginLeft:"30%"}}>
                  <button onClick={()=>{setSubType("subscribers");}}>Subscribers</button>
                  <button onClick={()=>{setSubType("subgain");}}>Subscribers Gained</button> 
                  <button onClick={()=>{setSubType("sublost");}}>Subscribers Lost</button>   
                </div>
                <div>
                  <div style={{width:"1000px"}}>
                    {subtype === "subscribers" && subscribers}
                    {subtype === "subgain" && subgained}
                    {subtype === "sublost" && sublost}
                    <h2 style={{textAlign:"center"}}>Subscription Source</h2>
                  </div>
                </div>
              </div>
            }  

          {charttype === "Views" && 
              <div style={{width:"550px",marginLeft:"30%"}}>
                <PieShow title="Views" datatype={ViewPieChartData}/>
              </div>
          }
          {charttype === "Watch-time" && 
            <div style={{width:"550px",marginLeft:"30%"}}>
                <PieShow title="WatchTime" datatype={WatchTimeChartData}/>
            </div>
          }

          {charttype === "Age" && 
            <div style={{marginLeft:"9%"}}>
              <div style={{marginLeft:"26%"}}>
                <button onClick={()=>{setAgeType("view");}}>Views%</button>
                <button onClick={()=>{setAgeType("avgview");}}>Average View Duration</button>  
                <button onClick={()=>{setAgeType("avgview%");}}>Average View %</button>  
                <button onClick={()=>{setAgeType("watch%");}}>Watch Time %</button>  
              </div>
              <br/>
              <div style={{width:"1000px"}}>
                  {agetype === "view" && ageviewchart}
                  {agetype === "avgview" && ageviewdurationchart}
                  {agetype === "avgview%" && ageviewperchart}
                  {agetype === "watch%" && agewatchperchart}
                  <h3 style={{textAlign:"center"}}>Age</h3>
              </div>
            </div>
          }
          {charttype == "Gender" && 
            <div style={{marginLeft:"9%"}}>
              <div style={{marginLeft:"26%"}}>
                  <button onClick={()=>{setGenderType("view");}}>Views%</button>
                  <button onClick={()=>{setGenderType("avgview");}}>Average View Duration</button>  
                  <button onClick={()=>{setGenderType("avgview%");}}>Average View %</button>  
                  <button onClick={()=>{setGenderType("watch%");}}>Watch Time %</button>  
              </div>
              <br/>
              <div style={{width:"1000px"}}>
                    {gendertype === "view" && genderviewchart}
                    {gendertype === "avgview" && genderviewdurationchart}
                    {gendertype === "avgview%" && genderviewperchart}
                    {gendertype === "watch%" && genderwatchperchart}  
                    <h3 style={{textAlign:"center"}}>Gender</h3>
              </div>
            </div>
          }
      </Container>
      <br/>
    </div>
  );
}

export default ViewerStats;

  
