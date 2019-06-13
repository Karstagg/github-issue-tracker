import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Search from "../components/search/Search"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/styles.css"


const IndexPage = () => (
  <Layout>
    <div className={"splash"}>
    <SEO title="Home"/>
    <h1 style={styles.mainContent}>Github Issue Viewer</h1>
    <div style={styles.mainSearch}>
      <Search/>
    </div>
    </div>
  </Layout>
)

const styles = {

  mainContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "40vh"
  },
  mainSearch: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
}


export default IndexPage
