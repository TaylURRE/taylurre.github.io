import React from "react"
import "../styles/styles.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <p>Hi there! </p>
      <p>My name is <b>Taylor Dennis</b> and I am a self-taught Software Engineer</p>
      <p><b>Javascript</b> is my language of choice but I'm always DTL (down to learn)</p>
      <p>my <b>pronouns</b> are she/her/lady</p>

      <p>Check out my learnings and thoughts in my blog</p>
      <p>I'm also in the wild so connect with me on social media</p>

    </div>
  </Layout>
)

export default IndexPage
