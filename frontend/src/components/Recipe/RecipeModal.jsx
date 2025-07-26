import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';
import { Modal } from '../UI/Modal';

export const RecipeModal = ({ recipe, isOpen, onClose }) => {
  if (!recipe) return null;

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-600 bg-green-100';
      case 'Medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'Hard':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="sm:max-w-4xl">
      <div className="bg-white">
        {/* Header Image */}
        <div className="relative h-64 sm:h-80">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-sm font-semibold bg-orange-500 px-3 py-1 rounded-full">
                {recipe.category}
              </span>
              <span className={`text-sm font-semibold px-3 py-1 rounded-full ${getDifficultyColor(recipe.difficulty)}`}>
                {recipe.difficulty}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">{recipe.title}</h2>
            <p className="text-lg opacity-90">{recipe.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="h-5 w-5" />
              <span className="font-medium">{recipe.cookTime} minutes</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="h-5 w-5" />
              <span className="font-medium">{recipe.servings} servings</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <ChefHat className="h-5 w-5" />
              <span className="font-medium">{recipe.authorName || 'Unknown'}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ingredients</h3>
              <ul className="space-y-3">
                {Array.isArray(recipe.ingredients) && recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Instructions</h3>
              <ol className="space-y-4">
                {Array.isArray(recipe.instructions) && recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 leading-relaxed">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Nutrition Info */}
          {recipe.nutrition && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nutrition Information</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-orange-50 rounded-2xl">
                  <div className="text-2xl font-bold text-gray-900">{recipe.nutrition.calories}</div>
                  <div className="text-sm text-gray-600 font-medium">Calories</div>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-2xl">
                  <div className="text-2xl font-bold text-gray-900">{recipe.nutrition.protein}g</div>
                  <div className="text-sm text-gray-600 font-medium">Protein</div>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-2xl">
                  <div className="text-2xl font-bold text-gray-900">{recipe.nutrition.carbs}g</div>
                  <div className="text-sm text-gray-600 font-medium">Carbs</div>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-2xl">
                  <div className="text-2xl font-bold text-gray-900">{recipe.nutrition.fat}g</div>
                  <div className="text-sm text-gray-600 font-medium">Fat</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};
