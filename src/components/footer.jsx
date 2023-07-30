import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css";

export default function Footer() {
  return (
     
        
        <footer className="container-fluid text-center">
        <div class="row align-items-center ">
 
 <p className="col one first">
     Better Brains is one of the leading platforms of
     <br/>
     INDIA to Perform, Analyze& improve your JEE
     <br/>
     preparation so that you can achieve your dream of
     <br/>
     IITs & NITs.
     <br/><br/>
 </p>
 
 <ul className="col two  foot-two">
 
     <li>BETTER BRAINS</li>
     <br/><br/><br/>
   
     <li>About us</li>
     <br/>
     <li>privacy Policy</li>
     <br/>
     <li>Terms and Condition</li>
     <br/>
 </ul>
 
 <ul className="col three foot-two">
 
     <li class="list">QUICK LINKS</li>
     <br/>
     <br/>
     <li>Home</li>
     <br/>
     <li>Inspiring Stories</li>
     <br/>
     <li>important tips</li>
     <br/>
     <li>Community</li>
     <br/>
      
     <Link to="/">
       <li>contact us</li>
       </Link>
     
     <br/><br/>
   </ul>
   </div>
   </footer>
    
  )
}
