import React from 'react'
import setupTags from '../utils/setupTags'
import { Link } from 'gatsby'

const TagsList = ({recipes}) =>{
    const newTags = setupTags(recipes)
    console.log(newTags);
    return(
        <div className="tag-container">
          <h4>Recipes</h4>
          <div className="tags-list">
            {newTags.map((tag,index)=>{
                const [text, value] = tag
                return (
                // leva para a single page da receita:
                //<Link to={`/${text}`} key={index}>
                   <Link to={`/`} key={index}>  
                    {text} ({value})
                </Link>
                )
            })}
          </div>
        </div>
    )
}

export default TagsList