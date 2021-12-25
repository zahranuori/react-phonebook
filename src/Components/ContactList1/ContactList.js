import Contact from "../Contact/Contact";
import "./ContactList.style.css"
  const users =[
      {name:'zahra',
         family:'nuori',
         numberPhone:'09016176249'},
      {name:'reza',
          family:'naderi rad',
          numberPhone:'09387935702'},
      {name:'sara',
          family:'darabi',
          numberPhone:'09112385689'},
      {name:'mohammad',
          family:'divoone',
          numberPhone:'09111470598'},
      {name:'hamta',
          family:'sepehri',
          numberPhone:'09121658952'},
      {name:'nima',
          family:'javaheri',
          numberPhone:'09111212299'}
  ]
function ContactList(){
    return(
        <div>
            {/*<Contact name='zahra' family='nuori' numberPhone="09016176249"/>*/}
            {/*<Contact name='Reza' family='naderi rad' numberPhone="09387935702"/>*/}
            {/*<Contact name='sara' family='sorkhani' numberPhone="0911138797"/>*/}
            {/*<Contact name='ali' family='maleki' numberPhone="09032191943"/>*/}
            {/*<Contact name='mohammad' family='rezaee' numberPhone="091125210148"/>*/}
            {/*<Contact name='hamraz' family='hayaii' numberPhone="0911131487"/>*/}
            {/*<Contact name='siavash' family='tahmores' numberPhone="0912121387"/>*/}
            {users.map((user)=> (
                <Contact name={user.name} family={user.family} numberPhone={user.numberPhone} />
            ))
            }
        </div>
    )
}

export default ContactList;