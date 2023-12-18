import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import './Cards.css'
let icon = <FontAwesomeIcon icon={faExclamationTriangle} />;
const data=[
  {
    'heading':'Spring Forecast',
    'value':4,
    'Para':'Estimated Date 30/07/22'
  },
  {
    'heading':'SP Completed',
    'value':360,
  },
  {
    'heading':'Overall Progress',
    'value': '95%',
    'icon': icon,
  },
]
const CardData = () => {
  return (
    <div>
      {
        data.map((val,index)=>{
          return(
            <center>
            <div className='card-container'>
              <h2>{ val.heading}</h2>
              <h3>{val.value}{val.icon}</h3>
              <p>{val.Para}</p>
            </div>
            </center>
          )
        })
      }
    </div>
  )
}

export default CardData
