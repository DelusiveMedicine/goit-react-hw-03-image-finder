import React from 'react';
import styles from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const { searchForm } = styles;
  return (
    <form className={searchForm}>
      <input
        onSubmit={onSubmit}
        type="text"
        autocomplete="off"
        placeholder="Search images..."
      />
    </form>
  );
};

export default SearchForm;
