import React,{useState} from 'react'; 
import PieChart from "./pieChart";
//import { UserData } from "./userData";


function PieShow(props) {
  const [pieData, setPieData] = useState({
    labels: props.datatype.map((data) => data.type),
    datasets: [
      {
        label: "18-24 years",
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        data: props.datatype.map((data) => data.value),
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div>
        <div>
          <PieChart chartData={pieData} />
          <h1 style={{textAlign:"center"}}>{props.title}</h1>
        </div>
    </div>
  );
}

export default PieShow;