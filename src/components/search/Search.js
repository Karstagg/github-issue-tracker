
import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from "./SearchForm"

export default class Search extends Component {

  constructor() {
    super();
    this.state = {
      repos: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'web') => {
    axios.get(`https://api.github.com/search/repositories?q=${query}`)
      .then(response => {
        this.setState({
          query: query,
          repos: response.data.items,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Search</h1>
            <SearchForm onSearch={this.performSearch} />
          </div>
        </div>
        <div className="main-content">

        </div>
      </div>
    );
  }
}

