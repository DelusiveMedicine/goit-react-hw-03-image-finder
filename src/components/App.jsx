import React from 'react';
import styles from './App.module.css';
import SearchForm from './SearchForm/SearchForm';
import Gallery from './Gallery/Gallery';

const App = () => {
  const { app } = styles;
  return (
    <div className={app}>
      <SearchForm />
      <Gallery />
    </div>
  );
};

export default App;
