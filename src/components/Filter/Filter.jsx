// import s from './Filter.module.css'
import PropTypes from 'prop-types';

export default function Filter({ onFilterInputChange }) {
  return (
    <div>
      <label htmlFor="">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={e => {
          onFilterInputChange(e.currentTarget.value);
        }}
      />
    </div>
  );
}

Filter.propTypes = {
  onFilterInputChange: PropTypes.func,
};
