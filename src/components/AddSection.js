import React from 'react';
import "./AddSection.css";
import img1 from "../assets/2.gif";

const AddSection = () => {
  return (
    <div>
      <h1  className='title'>Add Appointmens</h1>

      <div className='container' >

      <div className='form'>
        <div>
           <label for="title">Title : </label>
           <input type="text" placeholder='Enter Your Title'/>
        </div>
        <div>
           <label for="date" >Date : </label>
           <input type="date" />
        </div>
        <input className='button' type= "submit" />
      </div>

      <div className='image'>
         <img src={img1}/>
      </div>

      </div>

    </div>
  )
}

export default AddSection;