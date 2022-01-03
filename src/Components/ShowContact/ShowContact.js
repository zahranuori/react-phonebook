import "./ShowContact.style.css";
import Contact from "../Contact/Contact";
import image from "./../../image/user4.svg"
import React from "react";
function ShowContact(){
    return(
        <div className='contact-card'>
            <Contact className='show-card' img={image} name='zahra' family='nuori' numberPhone="09016176249"/>
           <div className="button-change">
               {/*<button className="btn__delete">Delete</button>*/}

               <button className="noselect"><span className="text">Delete</span><span className="icon"><svg
                   viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path
                   d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
               </button>

           </div>

    <form>
        <div className='update-contact__set-inputs'>
            <label className='tiltle-lable'>Name:<input type='text' className='inp'/> </label>
        </div>
        <div className='update-contact__set-inputs'>
            <label className='tiltle-lable'>Family: </label><input type='text' className='inp'/>
        </div>
        <div className='update-contact__set-inputs'>
            <label className='tiltle-lable'>Number: </label><input type='number' className='inp'/>
        </div>
        <button className='button-update-contact'>Update</button>
    </form>

</div>
    )
}

export default ShowContact;