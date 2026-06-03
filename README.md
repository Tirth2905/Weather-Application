#WEATHER APPLICATION

COMPANY: CODTECH IT SOLUTIONS

NAME: SAVANI TIRTH NILESHBHAI

INTERN ID: CTIS9902

DOMAIN: MERN STACK WEB DEVELOPMENT

DURATION: 4 WEEEKS

MENTOR: NEELA SANTOSH

DISCRIPTION:- 
WeatherApp is a full-stack web application built using the MERN stack — MongoDB, Express.js, React, and Node.js — that provides real-time weather information for any city around the world. The application integrates with the OpenWeatherMap API to fetch live weather data and presents it through a clean, responsive, and modern user interface. This project demonstrates end-to-end web development skills, from building a RESTful backend API to designing an interactive frontend, all connected to a NoSQL database.

🎯 Purpose and Motivation
Weather information is something every person needs on a daily basis. The goal of this project was to build a practical, real-world application that solves a common problem while showcasing the full capabilities of the MERN stack. Rather than relying on a third-party weather widget, this app builds the entire pipeline from scratch — from making server-side API calls to rendering the data beautifully on the frontend. It was also an opportunity to practice connecting all four layers of a modern web application in a clean, maintainable way.

⚙️ How It Works
When a user types a city name into the search bar and clicks Search, the React frontend sends a request to the Express backend running on Node.js. The backend then calls the OpenWeatherMap API using the city name, retrieves the current weather data and a 5-day forecast, and sends it back to the frontend as a JSON response. At the same time, the searched city is saved into a MongoDB database using Mongoose, so users can see their recent search history and quickly revisit previous searches with one click.
The entire flow happens in seconds, giving the user a seamless and fast experience without any page reloads, thanks to React's component-based architecture.

🛠️ Tech Stack

MongoDB — NoSQL database used to store search history. Each search saves the city name, country code, coordinates, and timestamp. Mongoose is used as the ODM (Object Data Modeling) library to define schemas and interact with the database.
Express.js — Lightweight Node.js framework used to build the REST API. It handles routing, middleware, CORS configuration, and communication with the OpenWeatherMap API via Axios.
React.js — Frontend library used to build the user interface. The app is built with functional components and React Hooks (useState, useEffect, useCallback) to manage state and side effects efficiently.
Node.js — JavaScript runtime that powers the backend server. It handles all incoming HTTP requests, environment configuration via dotenv, and acts as the bridge between the frontend and the weather API.


🌟 Key Features

Real-time weather search — Search any city in the world and instantly see current weather conditions including temperature, feels-like temperature, humidity, wind speed and direction, atmospheric pressure, cloud coverage, and visibility.
5-Day Forecast — A detailed 5-day weather forecast is displayed below the current weather, showing daily high/low temperatures and weather conditions.
Search History — Every city searched is saved in MongoDB and displayed as quick-access buttons. Users can click any previous search to reload that city's weather instantly. History can also be cleared with one click.
Responsive Design — The app is fully responsive and works seamlessly on desktops, tablets, and mobile devices.
Error Handling — Friendly error messages are shown when a city is not found or if the server encounters an issue, making the app robust and user-friendly.
Graceful MongoDB Fallback — If MongoDB is not running, the application continues to work normally for weather search. Only the history feature is disabled, ensuring the core functionality is never broken.


OUTPUT:-
