import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
 const post = data.markdownRemark;
 return (
     <Layout>
   <div>
     <h1 style={{color: '#FFF'}}>{post.frontmatter.title}</h1>
     <h4><span style={{color: '#B4AAFF'}}> {post.frontmatter.date}</span></h4>
     <div dangerouslySetInnerHTML = {{ __html: post.html }}/>
   </div>
   </Layout>
 );
};
export const query = graphql`query($slug: String!) {
   markdownRemark(fields: { slug: { eq: $slug } }) {
     html
     frontmatter {
       path
       title
       date
     }
   }
 }`;