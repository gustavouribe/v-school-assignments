import React from 'react'

const Form = () => {
    return (
        <div className="form">
            <div><h1>hey bitch :)</h1></div>
            <div className="formRows"><input className="formInputs" type="text" placeholder="First Name"></input><input type="text" placeholder="Last Name"></input></div>
   
            <div className="formRows"><input className="formInputs" type="text" placeholder="Email"></input><input  type="text" placeholder="Place of Birth"></input></div>  
            <div className="formRows"><input className="formInputs" type="text" placeholder="Phone"></input><input  type="text" placeholder="Favorite Food"></input></div>
            <div className="formArea"><textarea className="formText" placeholder="Tell us about yourself"></textarea></div>  
            <div className="formButton"><button className="btn">Submit</button></div> 
        </div>
    )
}

export default Form;