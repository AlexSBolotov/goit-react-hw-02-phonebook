// import s from './ContactForm.module.css'
import { nanoid } from 'nanoid';
import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  onFormSubmit = e => {
    e.preventDefault();
    console.log(this.state.name);
    this.props.isNamesDublicated(this.state.name)
      ? alert('hdgjsfkllkdsjafh')
      : this.props.addContact({ ...this.state, id: nanoid() });

    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <form action="" onSubmit={this.onFormSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.onInputChange}
        />
        <label htmlFor="number">Number</label>
        <input
          id="number"
          type="text"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.onInputChange}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  isNamesDublicated: PropTypes.func,
  addContact: PropTypes.func,
};