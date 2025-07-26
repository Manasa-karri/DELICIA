import React from 'react';
import { RecipeCard } from './Recipe/RecipeCard';

export const SearchResults = ({ results, onRecipeClick, onRecipeHover }) => {
  if (!results || results.length === 0) {
    return <div className="text-center mt-10 text-gray-500">No recipes found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {results.map((recipe, index) => (
        <RecipeCard
          key={index}
          recipe={recipe}
          onClick={() => onRecipeClick(recipe)}
          onMouseEnter={() => onRecipeHover(recipe)}
        />
      ))}
    </div>
  );
};
