import React from "react";
import Layout from "../components/Layout";
import {Link,graphql} from 'gatsby'
import { StaticImage } from "gatsby-plugin-image";
import RecipesList from "../components/RecipesList";
import SEO from '../components/SEO'

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" description={"This is About Page"}/>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>Taxidermy forage glossier letterpress heirloom before they sold out you probably haven't heard of them banh mi biodiesel chia.</p>
            <p>Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.</p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
          src="../assets/images/about.jpeg"
          alt="About Principal Image"
          className="about-img"
          placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at This Awesomesouce!</h5>
         <RecipesList recipes={recipes}/>
        </section>
      </main>
    </Layout>
  )
}



export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About;
