import React from "react";
import './CreateContact.style.css'
function CreateContact(){
    return(
        <div className='create-contact'>
            <h1>Create contact</h1>
            <div className='create-contact__set-inputs' >
            <div className='create-contact__set-inputs-flex'>
            <label className='peraperty-lable'>Name : </label><input type='text'/>
            </div>
            <div className='create-contact__set-inputs'>
                <label className='peraperty-lable'>Family : </label><input type='text'/>
            </div>
            <div className='create-contact__set-inputs'>
                <label className='peraperty-lable'>Number : </label><input type='number'/>
            </div>
            </div>
            <button className='button-create-contact'>Submit</button>

        </div>
    )
}

export default CreateContact;