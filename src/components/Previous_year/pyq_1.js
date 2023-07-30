import React from 'react'
import PYQ from './pyq'
import "./pyq_1.css"
import { penpaper, pricepyq_1} from '../images'
import "react-bootstrap"

import 'react-bootstrap';
import Navbar from '../Navbar'
import Footer from '../footer'

export default function Pyq_1() {
  return (
    <>
    <Navbar/>
    <br/>
    <div className="container">

    <div className='row'>
      
    <div  className="column1BrahamastraBox col-sm-12 col-lg-6">
      <h1 className="brahamastra">PYQ 1</h1>
      <img src={penpaper} alt="test"/>
      <h1>Rs.1699/-</h1>
      <h6 className="downloadSchedule">download schedule</h6>

    
    
      
</div>
<div className='col-sm-12 col-lg-6'>
      <PYQ
        courseObjective="Past 20 years test papers of JEE(mains+advanced)"
        target="JEE-2024"
        recomended="students targetting Jee-Advanced 2024"
        start="within 24 hrs of purchase"
        active="JEE ADVANCED 2024"
        mode="Online"
        medium="English"

        listno1="All the test papers from 2007 till 2023 of JEE(mains+advanced) at regular intervals as per the respective exam patterns."
        listno2="Test Papers from all the sessions."
        listno3="24-hr window available to attempt the test on its scheduled date and further from that date till course ends."
        listno4="All questions are authentic."
        listno5="access to video solutions of each and every question made by IITians and NITians."
        listno6="Hints and solutions to help students analyze their mistakes."
        listno7="comprehensive to the point performance analysis report after every test to enhance strong topics and target weak topic."
      />
    </div>
    </div>
  
    </div>
    <Footer/>
    </>
  )
}
