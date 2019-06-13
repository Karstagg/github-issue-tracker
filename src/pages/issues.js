import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/styles.css"
import {connect} from "react-redux"
import Header from "../components/header"
import CardArea from "../components/cardArea"
class Issues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "all"
    }
  }

  componentDidMount() {


  }
  clicked = (option) => {
    this.setState({active: option})
  }


  render() {
    let searchIssues = this.props.issues.issues
    if (searchIssues.length > 1) {
      return (
        <Layout>
          <div className="issues">
            <SEO title="issues"/>
            <Header siteTitle={"GitHub Issue Viewer"} url={searchIssues[0].html_url}/>
            <div
              style={{
                maxWidth: 600,
                padding: `1.45rem 1.0875rem`,
              }}
            >
              <div className="row">
                <div className={this.state.active === "all" ? "toggle on" : "toggle off"}  onClick={() => this.clicked("all")}>All</div>
                <div className={this.state.active === "open" ? "toggle on" : "toggle off"} onClick={() => this.clicked("open")}>Open</div>
                <div className={this.state.active === "closed" ? "toggle on" : "toggle off"} onClick={() => this.clicked("closed")}>Closed</div>
                <div className={this.state.active === "pull" ? "toggle on" : "toggle off"} onClick={() => this.clicked("pull")}>Pull Request</div>
              </div>
            </div>
            <CardArea issues={searchIssues} issueState={this.state.active}/>
            <Link to="/">Go back to the homepage</Link>
          </div>
        </Layout>
      )
    } else {
      return (
        <Layout>
          <div className="issues">
            <SEO title="issues"/>
            <Header/>
            <div style={styles.mainContent}>
              <h1>Nothing here yet</h1>
            </div>
          </div>
        </Layout>
      )
    }
  }
}
const styles = {

  mainContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "40vh"
  }
}

const mapStateToProps = state => {
  return {
    issues: state.issues
  }
}
export default connect(mapStateToProps)(Issues)
