import React from "react";
import Layout from "../components/Layout";
import AllRecipes from '../components/AllRecipes'
import SEO from '../components/SEO'

const Recipes = () => {
  return (
    <Layout>
       <SEO title="Recipes" description={"This is Recipes Page"}/>
      <main className="page">
        <h1>Recipes Page</h1>
        <AllRecipes/>
      </main>
    </Layout>
  );
};

export default Recipes;
