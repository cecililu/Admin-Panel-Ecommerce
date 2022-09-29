import React from 'react'
import './FeatureInfo.css'
import {ArrowDownward, ArrowUpward}from '@material-ui/icons';
export default function FeaturedInfo() {
  return (
    <div className='featuredInfo'>
       <div className="featuredItems">
            <span className="featuredTitle">
                Revenue
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">24$</span>
                <span className="featuredMoneyRate">-11<ArrowDownward/></span>
            </div>
            <span className="featuredTitle">Compared to Last Month</span>
       </div>


       <div className="featuredItems">
            <span className="featuredTitle">
                Sales
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">2423$</span>
                <span className="featuredMoneyRate">-11<ArrowDownward/></span>
            </div>
            <span className="featuredTitle">Compared to Last Month</span>
       </div>


       <div className="featuredItems">
            <span className="featuredTitle">
                Cost
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">24$</span>
                <span className="featuredMoneyRate">11<ArrowUpward/></span>
            </div>
            <span className="featuredTitle">Compared to Last Month</span>
       </div>
    </div>
  )
}
