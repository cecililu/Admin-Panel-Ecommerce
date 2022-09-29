import React from 'react'
import './LargeWidget.css'


export default function LargeWidget() {

  const Button=({type})=>{
    return (<button className={'widgetLgButton '+type}>{type}</button>);
  }
  return (
    <div className='LargeWidget'>
      <h3 className="widgetLarge">Latest Transaction</h3>
       <table className="widgetTable">
        <tr className="widgetLgTr"> 
        <th className="widgetLgTh">Costomer</th>
        <th className="widgetLgTh">Date</th>
        <th className="widgetLgTh">Amount</th>
        <th className="widgetLgTh">status</th>
        </tr>
        <tr className="widgetLgTr">
             <td className="widgetLgUser">
              <img src="https://picsum.photos/id/237/200/300" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Lita Anita</span>
             </td>
             <td className="widgetLgDate">Nove 2021</td>
             <td className="widgetAmount">$9809</td>
             <td className="widgetStatus">
              <Button type='Approved'></Button>
              
             </td>

             
        </tr>

        <tr className="widgetLgTr">
             <td className="widgetLgUser">
              <img src="https://picsum.photos/id/237/200/300" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Lita Anita</span>
             </td>
             <td className="widgetLgDate">Nove 2021</td>
             <td className="widgetAmount">$9809</td>
             <td className="widgetStatus">
              <Button type='Approved'></Button>
              
             </td>

             
        </tr><tr className="widgetLgTr">
             <td className="widgetLgUser">
              <img src="https://picsum.photos/id/237/200/300" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Lita Anita</span>
             </td>
             <td className="widgetLgDate">Nove 2021</td>
             <td className="widgetAmount">$9809</td>
             <td className="widgetStatus">
              <Button type='Pending'></Button>
              
             </td>

             
        </tr><tr className="widgetLgTr">
             <td className="widgetLgUser">
              <img src="https://picsum.photos/id/237/200/300" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Lita Anita</span>
             </td>
             <td className="widgetLgDate">Nove 2021</td>
             <td className="widgetAmount">$9809</td>
             <td className="widgetStatus">
              <Button type='Declined'></Button>
              
             </td>

             
        </tr>
       </table>
      </div>
  )
}
