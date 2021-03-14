import React, { Component } from 'react';
import shortid from 'shortid';

class SearchBar extends Component {
  state = {
    query: '',
  };

  searchInputId = shortid.generate();

  handleSearchInputChange = e => {
    this.setState({
      query: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.searchInputId}></label>
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleSearchInputChange}
            id={this.searchInputId}
            placeholder="Search images and photos"
            autoFocus
          />
          <button type="submit">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export default SearchBar;
