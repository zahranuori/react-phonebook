import React from "react";
import './CreateContact.style.css';
// import "../../../public/image/girl.svg";
function CreateContact(){
    return(
        <div className='create-contact'>
            <h1 className="heading-create">Create contact </h1>
            <span className="img-header" />

            <div className='create-contact__set-inputs-flex' >
            <div className='create-contact__set-inputs'>
            <label className='peraperty-lable'>Name:<input type='text' className='inp'/> </label>
            </div>
            <div className='create-contact__set-inputs'>
                <label className='peraperty-lable'>Family: </label><input type='text' className='inp'/>
            </div>
            <div className='create-contact__set-inputs'>
                <label className='peraperty-lable'>Number: </label><input type='number' className='inp'/>
            </div>
            </div>
            <button className='button-create-contact'>Submit</button>

        </div>
    )
}

export default CreateContact;