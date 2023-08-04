import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./contact.css";

function ContactForm (){
   
       
  {  const [state, handleSubmit] = useForm("mgejvpwr");
   if (state.succeeded) {
       return <p>Thanks for joining!</p>;
   }
   return (
    <>
    
  <div className='container containingall'>
        <div className="row">
        <div className='col-sm-12 col-lg-6 form-group'>
       <form className="form" onSubmit={handleSubmit}>
        <h1 className="heading">Contact Us</h1>
       <label className="email-1" htmlFor="email">
         Email Address : 
       </label>
       <input className="input"
         id="email"
         type="email" 
         name="email"
       /><br/>
       <ValidationError 
         prefix="Email" 
         field="email"
         errors={state.errors}
       />
       <label className='email-1' htmlFor='message'>
        Message : <br/> Your Feedback <br/> is precious for us
       </label>
       <textarea className="input"
         id="message"
         name="message"
       />
       <ValidationError 
         prefix="Message" 
         field="message"
         errors={state.errors}
       />
       <br/>
       <button type="submit" disabled={state.submitting}>
         Submit
       </button>
     </form>
     </div>
     <div className='col-lg-6 col-sm-12'>
<p className='info'>


CALL us at <br/>
<span>6969696969</span>:  all seven days of week from 7 am
to 12 am
</p>

     </div>
     </div>
     </div>
 </>
   );
 }
 
     
 }


export default ContactForm;
        
 