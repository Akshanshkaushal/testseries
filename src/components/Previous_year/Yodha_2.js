import React from 'react'
import PYQ from './pyq'
import "./pyq_1.css"
import { penpaper, pyodha_2 } from '../images'
import Navbar from '../Navbar'
import Footer from '../footer'

export default function Yodha_2() {
  return (
    <>
    <Navbar/>
    <br/>
    <div className="container">

    <div className='row'>
      
    <div  className="column1BrahamastraBox col-sm-12 col-lg-6">
      <h1 className="brahamastra">YODHA 2</h1>
      <img src={penpaper} alt="test"  />
      <h1>Rs.2299/-</h1>
      <h6 className="downloadSchedule">download schedule</h6>

    </div>
  
    <div className='col-sm-12 col-lg-6'>
      <PYQ
        courseObjective=" JEE (MAINS) 2024 targeted test series "
        target="  JEE MAINS 2024"
        recomended=" Dropper students targetting Jee-Mains 2024"
        start=" 31 August 2023"
        active=" JEE MAINS 2024"
        mode="Online"
        medium="English"

        listno1=" 24 Tests (16 topic wise tests + 8 cumulative tests) conducted at regular intervals as per the latest exam pattern."
        listno2=" Test Papers from entire and Half syllabus of JEE MAINS "
        listno3="24-hr window available to attempt the test on its scheduled date and further from that date till course ends."
        listno4="Questions of varying difficulty levels for thorough evaluation. "
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
