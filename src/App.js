import './App.css';
import ContactList from "./Components/ContactList/ContactList";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateContact from "./Components/CreateContact/CreateContact";

function App() {
  return (
    <div className="container-page">
        <div>
     <ContactList name='zahra' family='nuori' numberPhone="09016176249"/>
        <ContactList name='Reza' family='naderi rad' numberPhone="09387935702"/>
        <ContactList name='sara' family='sorkhani' numberPhone="0911138797"/>
        <ContactList name='ali' family='maleki' numberPhone="09032191943"/>
        <ContactList name='mohamamd' family='rezaee' numberPhone="091125210148"/>
        <ContactList name='hamraz' family='hayaii' numberPhone="0911131487"/>
        <ContactList name='siavash' family='tahmores' numberPhone="0912121387"/>
        </div>
        <div>
            <CreateContact />
        </div>
    </div>
  );
}

export default App;
