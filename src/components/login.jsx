 
import React from 'react';
import './Login.css'; 
import { continuegoogle, loginpic} from './images';
import Footer from './footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <Navbar/>
    <div class="loginStrip">login</div>

    <div className="login-container">
      <div className="image-container">
         
        <img src={loginpic} alt="Cover" />
      </div>
      <div className="login-form-container">
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              
              <input type="text" id="username" className="form-control" placeholder="Enter your username" />
            </div>
            <div className="form-group">
              
              <input type="password" id="password" className="form-control" placeholder="Enter your password" />
               </div>
               <p id="forgotPassword">forgot password?</p>
            <button type="submit" className="btn btn-primary">Login</button>
            <br/>
            <hr id="horizontalLine"/>
           <br/>
            <img src={continuegoogle} alt="continue with google" id="contWithGoogle"></img>
            <br/><br/>
            <div>Don't have an account? 
            <a> <Link to="/signup">
            Sign up
            </Link>
            </a>
            </div>
           
        
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
