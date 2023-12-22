import React from 'react'
import './FourthChartBox.scss'
import { ResponsiveContainer,PieChart, Pie,Cell, Tooltip } from 'recharts'

// -------------- PieChartWithPaddingAngle of PieChart from rechart.com --------------------------

const data = [
    {name:"Mobile", value:400, color:"#0088FE"},
    {name:"Desktop", value:500, color:"#00C49F"},
    {name:"Laptop", value:750, color:"#FFBB2B"},
    {name:"Tablet", value:100, color:"#FF8042"},
]

const FourthChartBox = () => {
  return (
    <>
      <div className="pieChartBox">
        <h1>Leads by source</h1>
        <div className="chart">

           <ResponsiveContainer width='99%' height={300}>
           <PieChart  >
             <Tooltip
             contentStyle={{background:"white",borderRadius:"5px"}}

             />
        <Pie
          data={data}
          innerRadius={'70%'}
          outerRadius={'90%'}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((item) => (
            <Cell 
            key={item.name}
             fill={item.color}
              />
          ))}
        </Pie>
        
      </PieChart>
           </ResponsiveContainer>

        </div>


<div className="options">
    {data.map(item=>(
        <div className="option" key={item.name}>
            <div className="title">
                <div className='dot' style={{backgroundColor: item.color}}  />
                <span>{item.name}</span>
            </div>
                <span>{item.value}</span>
        </div>
    ))}
</div>

      </div>




    </>
  )
}

export default FourthChartBox
