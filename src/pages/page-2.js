import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class Issues extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log(window.history.state)
  }

  render() {
    return (
      <Layout>
        <div className="issues">
          <SEO title="Page two"/>
          <h1>Hi from the second page</h1>
          <Link to="/">Go back to the homepage</Link>
        </div>
      </Layout>
    )
  }
}

