import React,{useState} from 'react'
import BarChart from "./barChart";

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