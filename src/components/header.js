import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = (props) => (

  <header
    style={{
      background: `#E91E63`,
      height: 75,
      marginBottom: `1.45rem`,
    }}
    className="header"
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: '100%',
        padding: `1.45rem 1.0875rem`,
      }}
    >

      <h1 style={{ position: "absolute", top: "0.5%" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: 24,
          }}
        >
          {props.siteTitle}
        </Link>
      </h1>
      <a style={{position: "absolute", top: "3%", right: "1%"}} href={props.url}>{props.url}</a>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Github Issue Viewer`,
}

export default Header
