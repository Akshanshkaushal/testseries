import React from "react";
import "./home.css"
import { test,
  analysis,
  vidsoln,
  quote,
  
  brahamastra,
  kawach,
  prarambh,
  prarambh2,
  pyq1,
  pyq2,
  samarpan,
  samarpan2,
  sarthi,
  sarthi2,
  yodha,
  yodha2,


  logo

} from "./images/index";
import ReactDOM from 'react-dom';
import Carousel from "./Carousel";

function Home(){
  return(
   
    <>
    <div class="container-fluid text-center carouselwala">
  <div class="row">
    <div class="col-sm-12 col-lg-6">
    <div class="alignCenterMediaQuery">

<p class="testbuddyTextWidth">
  Only place to analyse your preparation with jee buddies and mentors to
  ace the dream of IIT JEE..!
</p>
</div>
    </div>
    <div class="col-sm-12 col-lg-6">
    <Carousel calssName="corousel"/>

    </div>
  </div>
  </div>

  <div class="container">
    <div class="row slider">
      <img className=" col-sm-12 col-lg-8 slideimg" src={quote} alt="dreams dont work until you do" />
    </div>
  </div>

  <div class="freeTrialContainer">
    <div class="freeTrial">
      <h3>Take a Free Trial</h3>
    </div>
  </div>


  <div class="myCourse">
    <div>
      <h2 class="ourCoursesText">OUR COURSES</h2>
    </div>
    <div class="coursesContainer container">
      

<div className="row">
      <div class="col-lg-6 col-sm-12 design"> <a href=""> <img src={pyq1} alt="pyq1"/></a></div>
      <div class="design col-lg-6 gridAlign col-sm-12"> <a > <img src={pyq2} alt="pyq2"/></a></div>
</div>
<div className="row">

      <div class="design  col-lg-6 col-sm-12"> <a href=""> <img src={samarpan} alt="samarpan1"/></a>
      </div>
      <div class="design col-lg-6 gridAlign col-sm-12"> <a href=""> <img src={samarpan2}
            alt="samarpan2"/></a></div>
            </div>
   <div className="row">


      <div class="design col-lg-6 col-sm-12"><a href=""> <img src={prarambh} alt="prarambh1" /></a></div>
      <div class="design gridAlign col-lg-6 col-sm-12"><a href=""><img src={prarambh2} alt="prarambh 2" /></a>
      </div>
</div>
     
      <div className="row">

      <div class="design col-lg-6 col-sm-12"><a href=""> <img src={sarthi} alt="saarthi1" /></a> </div>
      <div class=" design gridAlign col-lg-6 col-sm-12"><a href=""> <img src={sarthi2} alt="saarthi2" /></a>
      </div>

      </div>
      <div className="row">


      <div class="design col-lg-6 col-sm-12"> <a href=""> <img src={brahamastra} alt="brahamastra"/></a></div>
      <div class="design gridAlign col-lg-6 col-sm-12"> <a href=""> <img src={kawach} alt="kawach" /></a></div>
      </div>

      <div className="row">

      <div class="design col-lg-6 col-sm-12"> <a href=""> <img src={yodha} alt="yodha1"/></a></div>
      <div class="design gridAlign col-lg-6 col-sm-12"> <a href=""> <img src={yodha2} alt="yodha2"/></a></div>
</div>
  </div>
      </div>
      <div class="gradient">
      <h1 class="ourSpecialities">OUR SPECIALITIES</h1>
 
    <div class="speciality_container">
      <p class="veryFirstSpeciality">we are the only ones who provide you with one to one JEE MAINS interface so that
        you
        can practice on the right interface and be used to with the interaface you’re gonna get to see in your
        Exam.....,But sorry we dont provide the glitches offered by JEE MAINS 😉 </p>
      <img src={test} alt="test interface_image" class="testInterfaceImage"/>

      <p class="firstSpeciality">Best in class analysis report with only required parameters needed to do perefect
        analysis of a test. </p>
      <img src={analysis} alt="analsisreport" class="analysisChartPhoto"/>


      <p class="secondSpeciality">Handmade VIDEO SOLUTIONS of each and every

        question made by IITians and NITians all over india with their personalized techniques.</p>
      <img src={vidsoln} alt="videosolution_img" class="videoSolution"/>
    </div>
  </div>
  
  
 
</>
  )
}

export default Home;