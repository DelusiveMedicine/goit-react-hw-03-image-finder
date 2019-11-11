import React, { Component } from 'react';
import styles from './App.module.css';
import SearchForm from './SearchForm/SearchForm';
import Gallery from './Gallery/Gallery';
import fetchData from '../API';

class App extends Component {
  state = {
    data: [],
    query: '',
    page: 1,
    currentQuery: '',
  };

  componentDidMount() {
    fetchData().then(({ data }) => {
      this.setState({ data: data.hits });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (query && query !== prevState.query) {
      this.setState({ currentQuery: query });
    }
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    this.setState({ query: value, page: 1, currentQuery: '' });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;
    fetchData(query)
      .then(({ data }) => {
        this.setState({ data: data.hits });
      })
      .then(this.setState({ query: '', page: 1 }));
  };

  loadItems = () => {
    const { currentQuery, page } = this.state;
    this.setState({ page: page + 1 });
    fetchData(currentQuery, page + 1)
      .then(({ data }) => {
        this.setState(prevState => ({
          data: [...prevState.data, ...data.hits],
        }));
      })
      .then(this.handleScroll);
  };

  handleScroll = () => {
    window.scrollTo({
      top: window.pageYOffset + 680,
      behavior: 'smooth',
    });
  };

  render() {
    const { app, button } = styles;
    const { data, query } = this.state;

    return (
      <div className={app}>
        <SearchForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={query}
        />
        {data.length ? (
          <Gallery items={data} />
        ) : (
          <h1>No results found for your query</h1>
        )}
        <button type="button" className={button} onClick={this.loadItems}>
          Load more
        </button>
      </div>
    );
  }
}

export default App;
