import { Link } from "gatsby"
import React from "react"
import logo from "../images/taylurre.png"

const Header = ({ siteTitle }) => (
  <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Taylor Dennis'/s Digital Portfolio"/>
        </Link>
      </div>
      <div className="navigation">
          <nav>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
          </nav>
      </div>
  </header>
)

export default Header
