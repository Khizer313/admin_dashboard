import React from 'react'
import './home.scss'
import TopBox from '../../Components/topBox/TopBox'
import ChartBox from '../../Components/chartBox/ChartBox'
import FourthChartBox from '../../Components/fourthChartBox/FourthChartBox'
import NineTenBox from '../../Components/nineTenBox/NineTenBox'

import { barChartBoxVisit,barChartBoxRevenue, chartBoxUser, chartBoxUserConversions, chartBoxUserProduct, chartBoxUserRevenue } from '../../data'
import SevenChartBox from '../../Components/sevenChartBox/SevenChartBox'

const Home = () => {
  
  return (
    <>
      <div className="home">
        <div className="box box1">
          <TopBox/>
        </div>
        <div className="box box2"><ChartBox  {...chartBoxUser} /></div>
        <div className="box box3"><ChartBox {...chartBoxUserProduct}  /></div>
        <div className="box box4"><FourthChartBox/></div>
        <div className="box box5"><ChartBox  {...chartBoxUserConversions}  /></div>
        <div className="box box6"><ChartBox {...chartBoxUserRevenue}  /></div>
        <div className="box box7"><SevenChartBox/></div>
        <div className="box box8"><NineTenBox {...barChartBoxVisit}/></div>
        <div className="box box9"><NineTenBox  {...barChartBoxRevenue}/></div>
      </div>
      



    </>
  )
}

export default Home
