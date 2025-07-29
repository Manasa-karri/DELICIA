import React, { useState } from 'react';
import { RecipeCard } from '../components/Recipe/RecipeCard';
import { RecipeModal } from "../components/Recipe/RecipeModal";

const GlobalSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchType, setSearchType] = useState('google-global');
  const [error, setError] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const cxGlobal = import.meta.env.VITE_GOOGLE_CSE_GLOBAL;
  const cxLimited = import.meta.env.VITE_GOOGLE_CSE_LIMITED;

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setRecipes([]);

    try {
      const cx = searchType === 'google-global' ? cxGlobal : cxLimited;
      const res = await fetch(
        `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey}&cx=${cx}`
      );
      const data = await res.json();

      const formattedRecipes = (data.items || []).map((item, index) => ({
        id: `g-${index}`,
        title: item.title,
        description: item.snippet,
        imageUrl: item.pagemap?.cse_image?.[0]?.src || '/images/placeholder.jpg',
        externalLink: item.link,
      }));

      setRecipes(formattedRecipes);
    } catch (err) {
      console.error(err);
      setError('Something went wrong while fetching recipes.');
    }

    setLoading(false);
  };

  const fetchScrapedRecipe = async (url) => {
    try {
      const response = await fetch('http://localhost:5001/scrape', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (data.error) {
        setError(`Scraping Error: ${data.error}`);
        return;
      }

      setSelectedRecipe(data); //  Show scraped recipe details
    } catch (error) {
      console.error("Scraping failed:", error);
      setError("Failed to fetch recipe details.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Search Recipes from Web</h2>

      <form onSubmit={handleSearch} className="flex gap-2 mb-6 flex-wrap">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for recipes..."
          className="p-2 border rounded flex-1"
        />
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="google-global">Google - All Websites</option>
          <option value="google-limited">Google - Trusted Sites</option>
        </select>
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && recipes.length === 0 && query && (
        <p>No recipes found for "{query}".</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="cursor-pointer"
            onClick={() => fetchScrapedRecipe(recipe.externalLink)}
          >
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>

      {/* Full Modal for Selected Scraped Recipe */}
      {selectedRecipe && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-2/3 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">{selectedRecipe.title}</h2>

            {selectedRecipe.image && (
              <img
                src={selectedRecipe.image}
                alt={selectedRecipe.title}
                className="mb-4 w-full max-h-[300px] object-cover rounded"
              />
            )}

            <div className="mb-2 text-gray-700">
              <strong>Total Time:</strong> {selectedRecipe.total_time || 'N/A'} mins
              <br />
              <strong>Servings:</strong> {selectedRecipe.yields || 'N/A'}
              <br />
              <strong>Source:</strong> {selectedRecipe.host || 'Unknown'}
            </div>

            <h4 className="font-semibold mt-4">Ingredients:</h4>
            <ul className="list-disc ml-6 mb-4">
              {selectedRecipe.ingredients?.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>

            <h4 className="font-semibold mt-2">Instructions:</h4>
            <p className="mb-4 whitespace-pre-wrap">{selectedRecipe.instructions}</p>

            {selectedRecipe.nutrients && typeof selectedRecipe.nutrients === 'object' && (
              <>
                <h4 className="font-semibold mt-2">Nutrients:</h4>
                <ul className="list-disc ml-6 mb-2">
                  {Object.entries(selectedRecipe.nutrients).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key}</strong>: {value}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => setSelectedRecipe(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;
