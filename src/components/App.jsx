import { Component } from "react";
import NameForm from "./NameForm/NameForm";
import Contacts from "./Contacts/Contacts";
// import phonebook from "./phonebook.json";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]
  }

  addContact = newContacts => {
    this.setState(prevState =>{
      return{
        contacts: [...prevState.contacts, newContacts]
      }
    })
  }
  render () {
  return (
    <div>
      <NameForm onSave={this.addContact}/>
      <Contacts contacts={this.state.contacts} />
    </div>
  );
  };
};

export default App