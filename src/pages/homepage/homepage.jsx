import React from 'react'
import Chart from '../../Components/charts/Chart'
import FeaturedInfo from '../../Components/FeaturedInfo/FeaturedInfo'
import './homepage.css'
export default function Homepage() {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart/>
    </div>
  )
}
