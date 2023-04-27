import ContactForm from './ContactForm/ContactForm';
import { StartState } from 'const/const';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [...StartState],
    filter: '',
  };
  removeContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };
  onFilterInputChange = name => {
    this.setState({ filter: name });
  };
  isNamesDublicated = name =>
    this.state.contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
  addContact = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <main>
        <h1>Phonebook</h1>
        <ContactForm
          isNamesDublicated={this.isNamesDublicated}
          addContact={this.addContact}
        />

        <h2>Contacts</h2>
        <Filter onFilterInputChange={this.onFilterInputChange} />
        <ContactList
          contacts={filteredContacts}
          removeContact={this.removeContact}
        />
      </main>
    );
  }
}
