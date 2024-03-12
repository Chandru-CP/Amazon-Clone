import {useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import './styles.css';
import SignIn from "./SignIn";



function SignUp(){
    const [formData, setFormData] = useState({}); 
    const navigate = useNavigate();
    const SignIn = () => {
      navigate('/')
    }
    

    return (
      <div className="background">
      <div className="new">
        <div className="container ">
          <form  className="Form">
            <label style={{color:"red"}}>Name:</label>
            <input type="text"id="UserName" className="form-control" placeholder="Ram Kumar" />
            <label style={{color:"red"}}>Email ID:</label>
            <input type="text" id="UserEmail" className="form-control" placeholder="123@gmail.com"  />
            <label style={{color:"red"}}>Mobile Number:</label>
            <input type="integer" id="UserMobileNumber" className='form-control' placeholder="1234567890"  />
            <label style={{color:"red"}}>Password:</label>
            <input type="password" id="UserPassword" className="form-control" placeholder="******"/>
            <button type="submit" className="buttonStyle" onClick={SignIn} style={{margin:2}}>Submit</button>
          </form>
        </div>
      </div>
    </div>
      );
      
}
export default SignUp;
