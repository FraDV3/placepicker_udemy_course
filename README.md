# 🌍 PlacePicker

A simple React app to help you build a personal collection of places you'd like to visit — or have already visited.

## ✨ Features

- Select places from a predefined list
- Sort available places by distance from your current location
- Save selected places to `localStorage` for persistent sessions
- Remove places with a confirmation modal and visual countdown

## 🛠️ Built With

- [React](https://reactjs.org/)
- JavaScript (ES6+)
- CSS Modules
- HTML5
- Geolocation API

## 🚀 Getting Started

To run this project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/FraDV3/placepicker_udemy_course.git
   cd placepicker_udemy_course
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

> This project was scaffolded using [Vite](https://vitejs.dev/) for fast development and hot module replacement.

## 📁 Folder Structure

```
src/
├── assets/              # Logo and static images
├── components/          # Reusable UI components
├── data.js              # Predefined places
├── loc.js               # Distance calculation helper
└── App.jsx              # Root component
```

## 📦 Deployment

To build the app for production:

```bash
npm run build
```

Then deploy the contents of the `dist` folder to your preferred host (e.g., Netlify, Vercel, GitHub Pages).

## 🧠 Learnings

- Practiced `useState`, `useEffect`, `useRef`, and `useCallback`
- Implemented modal portals and custom confirmation logic
- Used browser APIs like Geolocation and localStorage

## 🔒 License

MIT — [FraDV3](https://github.com/FraDV3)