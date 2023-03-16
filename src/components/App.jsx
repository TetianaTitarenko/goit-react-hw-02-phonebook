import { useState, useEffect } from 'react';
import NameForm from './NameForm/NameForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Layout from './Layout';
import phoneBook from '../phoneBook.json';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? phoneBook
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleFilterChange = (event) => {
    setFilter(event.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Layout>
      <NameForm onSave={addContact} />
      <Filter value={filter} onChange={handleFilterChange} />
      <Contacts contacts={visibleContacts} onDelete={deleteContact} />
    </Layout>
  );
}

export default App;