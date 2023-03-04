import { Component } from "react";
import NameForm from "./NameForm/NameForm";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";
import Layout from "./Layout";
import phoneBook from '../phoneBook.json';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

componentDidUpdate(prevProps, prevState) {
  if (prevState.contacts !== this.state.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }
}

componentDidMount() {
  const saveContacts = localStorage.getItem('contacts')
  if (saveContacts !== null) {
    const parsedContacts = JSON.parse(saveContacts);
    this.setState({ contacts: parsedContacts});
    return
  }
  this.setState({ contacts: phoneBook})
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
    <Layout>
      <NameForm onSave={this.addContact}/>
      <Filter value={this.state.filter} onChange={this.changeFilter} />
      <Contacts contacts={visibleContacts} onDelete={this.deleteContact} />
    </Layout>
  );
  };
};

export default App