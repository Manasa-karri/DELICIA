
# 🍽️ Deliciaa — Your Personal Recipe Hub

**Deliciaa** is a full-stack web application built using the **MERN stack** (MongoDB, Express.js, React, Node.js) that helps users discover, manage, and share recipes. It also supports scraping recipes from global websites and offers a clean, user-friendly experience.

---

## 🌟 Features

- 🔐 User Authentication (Login/Sign Up)
- 📝 Add, edit, delete your own recipes
- 🔍 Global recipe search (via API integration)
- 🧠 Smart recipe scraping from public URLs
- ❤️ Save favorite recipes to your profile
- 🎨 Dark mode toggle for a better UX
- 📂 Category filters & sorting by difficulty/cook time
- 📱 Fully responsive UI

---

## 📁 Project Structure

```
DELICIAA/
├── backend/
│   ├── server.js
│   ├── models/
│   ├── routes/
│   └── controllers/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── main.jsx
│   ├── tailwind.config.js
│   └── vite.config.js
├── recipe-scraper-api/
│   ├── app.py
│   └── requirements.txt
```

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Auth:** JWT (JSON Web Tokens)
- **Scraper:** Python + Flask + `recipe-scrapers`
- **External APIs:** TheMealDB, Google Custom Search API

---

## 🚀 Getting Started

### Clone the Repo

```bash
git clone https://github.com/yourusername/deliciaa.git
cd deliciaa
```

### Backend Setup

```bash
cd backend
npm install
npm start  # or nodemon server.js
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Python Scraper Setup (Optional but Recommended)

```bash
cd recipe-scraper-api
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python app.py
```

---

## 📡 API Routes

### Auth Routes

- `POST /api/auth/register`
- `POST /api/auth/login`

### Recipe Routes

- `GET /api/recipes`
- `POST /api/recipes`
- `PUT /api/recipes/:id`
- `DELETE /api/recipes/:id`

### Scraper Route (Python API)

- `POST /scrape` — body: `{ "url": "..." }`

---

## 📸 Screenshots

> *(Add screenshots of Home page, Add Recipe, Global Search, Profile, etc. for better impression)*

---

## 🙋‍♀️ Author

**Sai Manasa**  
Electrical and Electronics Engineering Undergraduate passionate about full-stack development and AI integrations.

---

## 📃 License

This project is licensed under the MIT License.
