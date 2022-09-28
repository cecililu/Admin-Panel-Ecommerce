import React from 'react'
import "./NavBar.css"

 import {TransformSharp ,Language,Settings}from '@material-ui/icons';
 //import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
export default function NavBar() {
  return (
    <div className='NavBar'>
        <div className='NavBarWrapper'>
           <div className="topLeft">
              <span className='logo'>cilkicks</span>
           </div>
           <div className="topRight">
             <div className="NavBarIcons">
                <TransformSharp/>
                <span className="topIconBag">
                    2
                </span>
             </div>

             <div className="NavBarIcons">
                <Language/>
                
             </div>

             <div className="NavBarIcons">
                <Settings/>
    
             </div>
           </div>


           
        </div>
        
    </div>
  )
}
