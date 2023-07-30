import React from 'react'
import "./pyq.css"
import { getenrolled } from '../images'


export default function  PYQ(props) {
  return (
    <div> 
    <div className='courseObjective'>
      <h3>{props.courseObjective}</h3>
    </div>

    <div className="courseDetails">

    <div className='target'>
      <h3>Target:{props.target}</h3>
    </div>

    <div className='recomended'>
      <div>Recomended-for :students targetting {props.recomended}</div>
    </div>
    
    <div className='start'>
      <h3>Start Date :{props.start}</h3>
    </div>

    <div className='active'>
      <div>Active untill :{props.active}</div>
    </div>

    <div className='mode'>
      <div> Mode :{props.mode}</div>
    </div>

    <div className='medium'>
      <div>Medium :{props.medium}</div>
    </div>
    
    <img src={getenrolled} alt="get enrolled" className="getEnrolled"/>
     </div>


    <div className="checkoutButtons">
    <img src="" alt=""/>
  </div>

  <br/>
  <br/>

  <div className="courseFeature">
    <div className="headingCourseFeature">COURSE FEATURES :</div>
    <br/><br/>

    <div className="features">

    <li>{props.listno1}</li>
    <li>{props.listno2}</li>
    <li>{props.listno3}</li>
    <li>{props.listno4}</li>
    <li>{props.listno5}</li>
    <li>{props.listno6}</li>
    <li>{props.listno7}</li>
    </div>
    </div>
    <div className="freeSpace"></div>
    </div>
  )
}
