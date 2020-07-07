import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
 const post = data.markdownRemark;
 return (
     <Layout>
   <div>
     <h1>{post.frontmatter.title}</h1>
     <h4 style={{color: 'rgb(165, 164, 164)'}}><span style={{fontSize: '0.8em'}}> {post.frontmatter.date}</span></h4>
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