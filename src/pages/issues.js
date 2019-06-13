import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Issue from "../components/issue"
import "../css/styles.css"
import {connect} from "react-redux"
class Issues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: []
    }
  }

  componentDidMount() {
    let searchIssues = window.history.state.issues
    this.setState({issues: searchIssues})

  }

  render() {
    console.log(this.state)
    if (this.state.issues.length > 1) {
      return (
        <Layout>
          <div className="issues">
            <SEO title="issues"/>
            <div className="card-area">
              <div>
                {this.state.issues.map((issue, index) => (

                  <div className="card-container">
                    <Issue issue={issue}/>
                  </div>
                ))}
              </div>

            </div>
            <Link to="/">Go back to the homepage</Link>
          </div>
        </Layout>
      )
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    issues: state.issues
  }
}
export default connect(mapStateToProps)(Issues)
