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
                <li className="sideBarItem ">
                    <LineStyle className="sideBarIcon"/>Home
                </li>
                <li className="sideBarItem">
                    <Timeline className="sideBarIcon"/>Analytics
                </li>
                <li className="sideBarItem">
                    <TrendingUp className="sideBarIcon"/>Sales
                </li>
            </ul>
           </div>
           <div className="sideBarMenu">
            <h4 className="sideBarTitle">
               Quick Menu
            </h4>
            <ul className="sideBarList">
                <li className="sideBarItem ">
                    <LineStyle className="sideBarIcon"/>User
                </li>
                <li className="sideBarItem">
                    <Timeline className="sideBarIcon"/>Products
                </li>
                <li className="sideBarItem">
                    <TrendingUp className="sideBarIcon"/>Transactions
                </li>
                <li className="sideBarItem">
                    <TrendingUp className="sideBarIcon"/>Reports
                </li>
            </ul>
           </div>



           <div className="sideBarMenu">
            <h4 className="sideBarTitle">
                Notification
            </h4>
            <ul className="sideBarList">
                <li className="sideBarItem">
                    <LineStyle className="sideBarIcon"/>Mail
                </li>
                <li className="sideBarItem">
                    <Timeline className="sideBarIcon"/>FeedBack
                </li>
                <li className="sideBarItem">
                    <TrendingUp  className="sideBarIcon"/>Message
                </li>
            </ul>
           </div>

           <div className="sideBarMenu">
            <h4 className="sideBarTitle">
                Staff
            </h4>
            <ul className="sideBarList">
                <li className="sideBarItem ">
                    <LineStyle className="sideBarIcon"/>Manage
                </li>
                <li className="sideBarItem">
                    <Timeline className="sideBarIcon"/>Analytics
                </li>
                <li className="sideBarItem">
                    <TrendingUp className="sideBarIcon"/>Reports
                </li>
            </ul>
           </div>

       </div>
    </div>
  )
}
