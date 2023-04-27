// import s from './ContactList.module.css'
import PropTypes from 'prop-types';

export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <span>
            {contact.name}: {contact.number}
          </span>
        </li>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
