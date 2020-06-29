import { Link } from "gatsby"
import React from "react"
import logo from "../images/taylurre.png"

const Header = ({ siteTitle }) => (
  <header>
      <div className="logo">
        <Link to="/">
          <img src={logo}/>
        </Link>
      </div>
      <div className="navigation">
          <nav>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/contact">Blog</Link>
            {/* <Link to="/work">Work</Link>
            <Link to="/what-i-use">What I Use</Link>
            <Link to="/blog">Blog</Link> */}
          </nav>
      </div>
  </header>
)

export default Header
