import React from 'react'
import './SideBar.css'
import {LineStyle,Timeline,TrendingUp}from '@material-ui/icons';
export default function SideBar() {
  return (
    <div className='sideBar'>
       <div className="sideBarWrapper">
           <div className="sideBarMenu">
            <h4 className="sideBarTitle">
                DashBoard
            </h4>
            <ul className="sideBarList">
                <li className="sideBarItem">
                    <LineStyle/>Home
                </li>
                <li className="sideBarItem">
                    <Timeline/>Analytics
                </li>
                <li className="sideBarItem">
                    <TrendingUp/>Sales
                </li>
            </ul>
           </div>


           <div className="sideBarMenu">
            <h4 className="sideBarTitle">
                DashBoard
            </h4>
            <ul className="sideBarList">
                <li className="sideBarItem">
                    <LineStyle/>Home
                </li>
                <li className="sideBarItem">
                    <Timeline/>Analytics
                </li>
                <li className="sideBarItem">
                    <TrendingUp/>Sales
                </li>
            </ul>
           </div>
       </div>
    </div>
  )
}
