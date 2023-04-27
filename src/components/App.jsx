import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  isNamesDublicated = name =>
    this.state.contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
  onFormSubmit = data => {
    console.log(data.name);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));

    console.log(this.state.contacts);
  };

  render() {
    return (
      <main>
        <h1>Phonebook</h1>
        <ContactForm
          isNamesDublicated={this.isNamesDublicated}
          submitCallback={this.onFormSubmit}
        />

        <h2>Contacts</h2>
        {/* <Filter /> */}
        <ContactList contacts={this.state.contacts} />
      </main>
    );
  }
}
