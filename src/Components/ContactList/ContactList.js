import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup} from "react-bootstrap";
import './ConcatList.style.css'
function ContactList (props) {
    const {name, family, numberPhone} = props
    return(
        <div className='list-container'>
            <ListGroup className='list-contact'>
                <ListGroup.Item variant="primary">
                    <span>{name}</span>
                    <p>{family}</p>
                    <p>{numberPhone}</p>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}
export default ContactList;