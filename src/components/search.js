
import React, { Component } from 'react';
import axios from 'axios';

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
    axios.get(`https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc`)
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
          </div>
        </div>
        <div className="main-content">

        </div>
      </div>
    );
  }
}

