import './App.css';
import ContactList from "./Components/ContactList/ContactList";
// import 'bootstrap/dist/css/bootstrap.min.css';
import CreateContact from "./Components/CreateContact/CreateContact";
import ShowContact from "./Components/ShowContact/ShowContact";

function App() {
  return (
    <div className="container-page">
        <div className='contact-list'>
            <ContactList />
        </div>
        <div>
            <CreateContact />
        </div>
        <div>
            <ShowContact />
        </div>
    </div>
  );
}

export default App;
