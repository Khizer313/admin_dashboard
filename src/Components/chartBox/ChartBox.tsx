import React from 'react'
import './chartBox.scss'
import { Link } from 'react-router-dom'

// npm i recharts sy install kea fr website py jaky koi aek chart ly lia fr ussy import krlea

import { LineChart, Line,  Tooltip,  ResponsiveContainer } from 'recharts';
// -------------- TinyLineChart of LineChart from rechart.com --------------------------



// edr box2,box3,box4,box5 ky andar ka data hy ar file me .tsx use kra yani thore type script, edr data data.js sy nhi lea kuki bhot sy box hain , eslia data jo hy wo hum home.jsx mi enko dain gy ar phly edr enko bta dea kh jo data home.jsx mi mily ga wo string ho ya number
 type Props  = {
    color : string;
    icon:string;
    title:string;
    dataKey:string;
    number: number | string;
    percentage: number;
    chartData: object[];
};



// edr props:Props sy upar type Props[] wala data ly rhy hain ar nichy show krwa rhy hain
const ChartBox = (props:Props) => {

  return (
<>
      <div className="chartBox">
        <div className="boxInfo">
          <div className="title">
            <h4>{props.icon}</h4>
            <span>{props.title}</span>
          </div>
          <h1>{props.number}</h1>
          <Link to='/' style={{color:props.color}}>
            View All
          </Link>
        </div>
        <div className="chartInfo">
           <div className="chart">
            {/* ye <ResponsiveContainer> hmain wo graph show krwa deta hy ar andr ka data fr hum change kr lty hain */}
           <ResponsiveContainer width="99%" height="100%">
        <LineChart  data={props.chartData}>
          {/* tootltip api hy es web ki ar styling wagera kylia use kra hy edr */}
            <Tooltip
            contentStyle={{background:"transparent",border:"none"}}
            labelStyle={{display:"none"}}
            position={{x:10,y:60}}
            
            />
          <Line 
          type="monotone" 
          dataKey={props.dataKey} 
          stroke={props.color}
          // dot khud lgaya takeh graph mi dot na nazar ain 
          dot={false} 
          strokeWidth={2}
           />
        </LineChart>
      </ResponsiveContainer>
           </div>
           <div className="texts">
            {/* jo percentage 0 sy choti ho to uska color tomato red hjaey nhi to green */}
            <div className="percentage" style={{color:props.percentage<0 ? "tomato":"limegreen"}}>{props.percentage}</div>
            <div className="duration">this month</div>
           </div>
        </div>
      </div>
    </>
  )
}

export default ChartBox
