import React from "react";
import Layout from "../components/Layout";
import { graphql,Link } from "gatsby";
import setupTags from '../utils/setupTags'
import SEO from '../components/SEO'
//import slugify from "slugify";

const Tags = ({data}) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)
  return (
    <Layout>
       <SEO title="Tags" description={"This is Tag Page"}/>
        <main className="page">
          <section className="tags-page">
            {newTags.map((tag,index)=>{
              const [text, value] = tag
             // const slug = slugify(tag, { lower: true });
              return(  // leva para a single page da tag:
             // <Link to={`/tags/${slug}`} key={index} className="tag">
              <Link to={`/recipes`} className="tag">
                <h5>{text}</h5>
                <p>{value} Recipe</p>
              </Link>
              )
            })}
          </section>
        </main>
    </Layout>
  )
}


export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`


export default Tags;
