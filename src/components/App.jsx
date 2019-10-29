import React from 'react';
import styles from './App.module.css';
import SearchForm from './SearchForm/SearchForm';

const App = () => {
  const { app } = styles;
  return (
    <div className={app}>
      <SearchForm />
    </div>
  );
};

export default App;
