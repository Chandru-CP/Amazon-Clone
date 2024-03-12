import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function SignIn(){
  const [formData, setFormData] = useState({}); 
  const navigate = useNavigate();

    const SignUp = () => {
      navigate('./signUp')
    }
    const Home = () => {
      navigate('./Home')
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        }
         
    

    return (
      
      <div className="background">
      <div className="new">
        <div className="container ">
          <form  className="Form">
            <label style={{color:"red"}}>Email ID:</label>
            <input type="text" id="UserEmail" className="form-control" placeholder="123@gmail.com"  />
            <label style={{color:"red"}}>Password:</label>
            <input type="password" id="UserPassword" className="form-control" placeholder="******"/>
            <button type="submit" className="buttonStyle"  onClick={Home} style={{margin:2}}>Submit</button>
          </form>
          <p>if you have Account</p>
          <button className="buttonStyle" style={{backgroundColor:"red"}}onClick={SignUp}> click here</button>
        </div>
      </div>
    </div>


      );
}
