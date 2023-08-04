 
import React from 'react';
import './Login.css'; 
import { continuegoogle, loginpic} from './images/index';
import Footer from './footer';
import Navbar from './Navbar';

const SignUp = () => {
  return (
    <>
    <Navbar/>
    <div class="loginStrip">SignUp</div>

    <div className="login-container">
      <div className="image-container">
         
        <img src={loginpic} alt="Cover" />
      </div>
      <div className="login-form-container">
        <div className="login-form">
          <h2>SignUp</h2>
          <form>
            <div className="form-group">
            
              <input type="text" id="username" className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
              
              <input type="integer" id="mobile" className="form-control" placeholder="Mobile.no" />
               </div> 
               <div className="form-group">
               
              <input type="email" id="email" className="form-control" placeholder="Email" />
               </div>
            <div className="form-group">
              
              <input type="password" id="password" className="form-control" placeholder="Create password" />
               </div>
               <div className="form-group">
              
              <input type="password" id="password" className="form-control" placeholder="Confirm password" />
               </div>
            <button type="submit" className="btn btn-primary">SignUp</button>
            <br/>
            <hr id="horizontalLine"/>
           <br/>
            <img src={continuegoogle} alt="continue with google" id="contWithGoogle"></img>
            <br/><br/>
            <div>Already have an account?  
            <button type="submit" className="btn btn-primary"> 
             Login
            </button>
            
            </div> 
          </form>
          
 
        </div>
        
      </div>
    
    </div>

    <Footer/>
    </>
  );
};

export default SignUp;
