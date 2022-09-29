import React from 'react'
import "./WidgetSmall.css"
import {Visibility}from '@material-ui/icons';

export default function WidgetSmall() {
  return (
    <div className='WidgetSmall'>
        <span className="widgetTitle">New Join members</span>
        <ul className="widgetlist">
            <li className="widgetListItem">
               <img src="https://picsum.photos/id/237/200/300" alt="" className="newUserImg" />
                <div className="user">
                    <span className="username">CECIL</span>
                    <span className="position">Sofware expert</span>
                </div>
                <button className='button'>
                <Visibility></Visibility>Display

                </button>
            </li>
            
            <li className="widgetListItem">
               <img src="https://picsum.photos/id/237/200/300" alt="" className="newUserImg" />
                <div className="user">
                    <span className="username">CECIL</span>
                    <span className="position">Sofware expert</span>
                </div>
                <button className='button'>
                <Visibility></Visibility>Display

                </button>
            </li>

            <li className="widgetListItem">
               <img src="https://picsum.photos/id/237/200/300" alt="" className="newUserImg" />
                <div className="user">
                    <span className="username">CECIL</span>
                    <span className="position">Sofware expert</span>
                </div>
                <button className='button'>
                <Visibility></Visibility>Display

                </button>
            </li>

            <li className="widgetListItem">
               <img src="https://picsum.photos/id/237/200/300" alt="" className="newUserImg" />
                <div className="user">
                    <span className="username">CECIL</span>
                    <span className="position">Sofware expert</span>
                </div>
                <button className='button'>
                    <Visibility></Visibility>Display

                </button>
            </li>

            <li className="widgetListItem">
               <img src="https://picsum.photos/id/237/200/300" alt="" className="newUserImg" />
                <div className="user">
                    <span className="username">CECIL</span>
                    <span className="position">Sofware expert</span>
                </div>
                <button className='button'>
                    <Visibility></Visibility>Display

                </button>
            </li>
        </ul>
    </div>
  )
}
