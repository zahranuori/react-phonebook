// import 'bootstrap/dist/css/bootstrap.min.css';
// import {ListGroup,Image} from "react-bootstrap";
import './Concat.style.css'


//clean ravesh :D
    // function Contact({name, family, numberPhone})
function Contact (props) {
    const {img,name, family, numberPhone} = props
    return(
        <div className='list-container'>
            <div>
            <img alt="avatar" src={img} className="avatar"/>
            </div>
            <div>
            <span>{name}</span>
            <p>{family}</p>
            <p>{numberPhone}</p>
            </div>
        </div>
    )
}
export default Contact;

