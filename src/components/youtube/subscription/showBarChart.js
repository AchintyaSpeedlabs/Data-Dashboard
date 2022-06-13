import React,{useEffect,useState} from 'react'
import BarChart from "./barChart";
import * as d3 from 'd3';
import {BarchartData}  from './viewbardata';

function SubscriptionStats(props) {
  const title = props.label;
  const color = props.color;
  const [barData, setBarData] = useState({
    labels: props.bdata.map((data) => data.type),
    datasets: [
      {
        label: title,
        data: props.bdata.map((data) => data.value),
        backgroundColor: [
          color,
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div>
      <div>
        <BarChart chartData={barData}/>
      </div>
    </div>
  )
}

export default SubscriptionStats 