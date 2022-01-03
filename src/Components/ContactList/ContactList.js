import Contact from "../Contact/Contact";
import "./ContactList.style.css";
import user1 from"./../../image/user1.svg";
import user2 from"./../../image/user2.svg";
import user3 from"./../../image/user3.svg";
import user4 from"./../../image/user4.svg";
import user5 from"./../../image/user5.svg";
import user7 from"./../../image/user7.svg";

  const users =[
      {id:1,
          img:user4,
          name:'zahra',
         family:'nuori',
         numberPhone:'09016176249'},
      {id:2,
          img:user2,
          name:'reza',
          family:'naderi rad',
          numberPhone:'09387935702'},
      {id:3,
          img:user3,
          name:'sara',
          family:'darabi',
          numberPhone:'09112385689'},
      {id:4,
          img:user1,
          name:'mohammad',
          family:'razi',
          numberPhone:'09111470598'},
      {id:5,
          img:user7,
          name:'hamta',
          family:'sepehri',
          numberPhone:'09121658952'},
      {
          id:6,
          img:user5,
          name:'nima',
          family:'javaheri',
          numberPhone:'09111212299'}
  ]
function ContactList(){
    return(
        <div className="contact-list-page">
            <input type='search' className="search-bar" placeholder="در من جستجو کن :)"/>
            <button className='btn__search-bar'>Search</button>
            {/*<Contact name='zahra' family='nuori' numberPhone="09016176249"/>*/}
            {/*<Contact name='Reza' family='naderi rad' numberPhone="09387935702"/>*/}
            {/*<Contact name='sara' family='sorkhani' numberPhone="0911138797"/>*/}
            {/*<Contact name='ali' family='maleki' numberPhone="09032191943"/>*/}
            {/*<Contact name='mohammad' family='rezaee' numberPhone="091125210148"/>*/}
            {/*<Contact name='hamraz' family='hayaii' numberPhone="0911131487"/>*/}
            {/*<Contact name='siavash' family='tahmores' numberPhone="0912121387"/>*/}
            {users.map((user)=> (
                <Contact key={user.id} img={user.img} name={user.name} family={user.family} numberPhone={user.numberPhone} />
            ))
            }
        </div>
    )
}

export default ContactList;