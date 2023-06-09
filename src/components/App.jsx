import ContactForm from './ContactForm/ContactForm';
import { StartState } from 'const/const';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [...StartState],
    filter: '',
  };
  // addContact = data => {
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, data],
  //   }));
  // };

  addContact = data => {
    this.isNamesDublicated(data.name)
      ? alert(`${data.name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, { ...data, id: nanoid() }],
        }));
  };
  removeContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };
  filterContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  onFilterInputChange = name => {
    this.setState({ filter: name });
  };
  isNamesDublicated = name =>
    this.state.contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

  render() {
    const filteredContacts = this.filterContacts();
    return (
      <main>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

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
