import React from 'react';
import './style.css'


const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className='card'>
            <h3 className="title">{title}</h3>
           <ul>
               {ingredients.map(ingredient => (
                   <li>{ingredient.text}</li>
               ))}
           </ul>
            <img className='image' src={image} />
        </div>
    );
}
export default Recipe