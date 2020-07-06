import React from "react"
import "../styles/styles.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import linkedinImg from "../images/linkedin.svg"
import githubImg from "../images/github.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">
      <p>Hi there!</p>
      <p>My name is <b>Taylor Dennis</b> and I am a self-taught Software Engineer</p>
      <p>my <b>pronouns</b> are she/her/lady</p>
    </div>
    <div className="socialMedia">
        <ul>
          <li>
            <img className="linkedIn" src={linkedinImg}/>
          </li>
          <li>
          <img className="githubImg" src={githubImg}/>

          </li>
        </ul>
      </div>
  </Layout>
)

export default IndexPage
