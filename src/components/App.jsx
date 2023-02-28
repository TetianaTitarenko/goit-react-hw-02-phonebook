import { Component } from "react";
import NameForm from "./NameForm/NameForm";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  addContact = newContacts => {
    this.setState(prevState =>{
      return{
        contacts: [...prevState.contacts, newContacts]
      }
    })
  }

  deleteContact = contId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== contId),
      };
    });
  };

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
  }

  render () {

    const normFiltr = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normFiltr))

  return (
    <div>
      <NameForm onSave={this.addContact}/>
      <Filter value={this.state.filter} onChange={this.changeFilter} />
      <Contacts contacts={visibleContacts} onDelete={this.deleteContact} />
    </div>
  );
  };
};

export default App