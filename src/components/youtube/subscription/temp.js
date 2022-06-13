import React,{useEffect,useState} from 'react'
import NavBar from '../navBar';
import LineChart from "./lineChart";
import * as d3 from 'd3';
import datafile from './subscriptiondata.csv';

function SubscriptionStats() {
  const [dat,setDate] = useState([]);
  const [substatus,setSubStatus] = useState([]);
  const [view,setViews] = useState([]);

  useEffect(()=>{
    d3.csv(datafile).then(data=>{
      const date = [];
      const subscriptionstatus = [];
      const views = [];

      for(var i = 0;i < data.length;i++){
        date.push(data[i].Date);
        subscriptionstatus.push(data[i].Subscriptionstatus);
        views.push(data[i].Views);
      }
      console.log(date);
      //date.map((data) => console.log(data));
      console.log(subscriptionstatus);
      console.log(views);
      setDate(date);
      setSubStatus(subscriptionstatus);
      setViews(views);
    }).catch(err=>{
      console.log(err);
    })
  },[]);
  const [lineData, setLineData] = useState({
    labels: dat,
    datasets: [
      {
        label: 'Views',
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        data: view,
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div>
      <NavBar/>
      <div style={{ width: 700 }}>
        <LineChart chartData={lineData} />
      </div>
    </div>
  )
}

export default SubscriptionStats