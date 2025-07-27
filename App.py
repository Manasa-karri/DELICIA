from flask import Flask, request, jsonify
from recipe_scrapers import scrape_me
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows cross-origin requests from frontend

@app.route('/')
def home():
    return jsonify({'message': 'Recipe Scraper API is running'}), 200

@app.route('/scrape', methods=['POST'])
def scrape():
    data = request.get_json()
    url = data.get('url')

    if not url:
        return jsonify({'error': 'URL is required'}), 400

    try:
        scraper = scrape_me(url)
        recipe = {
            'title': scraper.title(),
            'total_time': scraper.total_time(),
            'yields': scraper.yields(),
            'ingredients': scraper.ingredients(),
            'instructions': scraper.instructions(),
            'image': scraper.image(),
            'host': scraper.host(),
        }
        return jsonify(recipe), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
