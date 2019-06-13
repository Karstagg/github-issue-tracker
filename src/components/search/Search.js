
import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from "./SearchForm"
import "../../css/styles.css"
import { navigate } from "gatsby"

export default class Search extends Component {

  constructor() {
    super();
    this.state = {
      issues: [],
      loading: true
    };
  }

  componentDidMount() {
    //this.search();
  }

  search = (query = 'web') => {
    axios.get(`https://api.github.com/search/issues?q=${query}&sort=updated`)
      .then(response => {
        this.setState({
          query: query,
          issues: response.data.items,
          loading: false
        });
      }).then(() => {
        navigate('/issues/',
          {
            state: this.state
          }
        )
    })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div className="search-form">
            <SearchForm onSearch={this.search} />
      </div>
    );
  }
}

