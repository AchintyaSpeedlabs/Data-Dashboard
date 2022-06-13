import React, { useState } from 'react'
import NavBar from '../navBar';
import PieShow from './pieShow';
import {Container,Dropdown,DropdownButton} from 'react-bootstrap';
import {ViewPieChartData} from './viewData';
import {WatchTimeChartData} from './watchtime';

function TrafficStats() {
  const [charttype,setChartType] = useState("views");
  return (
    <div>
      <NavBar title="Traffic Stats"/>
      <Container>
        <DropdownButton
              variant="outline-secondary"
              title="Traffic"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item onClick={()=>{setChartType("views");}} href="#">Views</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={()=>{setChartType("watchtime");}} href="#">Watch Time</Dropdown.Item>
        </DropdownButton>
        {charttype === "views" && 
          <div style={{width:"550px",marginLeft:"30%"}}>
            <PieShow title="Views" datatype={ViewPieChartData}/>
          </div>
        }
        {charttype === "watchtime" && 
          <div style={{width:"550px",marginLeft:"30%"}}>
            <PieShow title="WatchTime" datatype={WatchTimeChartData}/>
          </div>
        }
      </Container>
      <br/>
      <br/>
    </div>
  )
}

export default TrafficStats