import React from 'react';
import styles from './SearchForm.module.css';

const SearchForm = ({ onSubmit, onChange, value }) => {
  const { searchForm } = styles;
  return (
    <form className={searchForm} onSubmit={onSubmit}>
      <input
        onChange={onChange}
        type="text"
        autoComplete="off"
        placeholder="Search images..."
        value={value}
      />
    </form>
  );
};

export default SearchForm;
