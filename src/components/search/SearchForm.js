import React, { Component } from 'react';
import "../../css/styles.css"
export default class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
    console.log(this.props)
  }


  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input className="search-input" type="search"
               onChange={this.onSearchChange}
               name="search"
               ref={(input) => this.query = input}
               placeholder="Search..." />
      </form>
    );
  }
}