# Picture Gallery

## Introduction
The picture gallery application is a React.js web app that allows users to search for pictures based on category names. It uses the Unsplash API to fetch relevant pictures and displays them in a responsive grid layout. The application features a user-friendly interface with CSS animations for an enhanced user experience.

## Deplolyed App
https://acumen-congnitive-ass.vercel.app/


## Features
List out the key features of your application.

- Search
- Grid
- Responsiveness

## design decisions or assumptions
List your design desissions & assumptions

## Approach and Challenges
Approach: The approach involves understanding the requirements of the picture gallery application and setting up the development environment with React and Vite. Creating components like SearchInput and PictureGrid, we implement a search feature using Unsplash API, fetching relevant pictures based on user input. The retrieved images are displayed in a responsive grid layout with image details. CSS styling and animations enhance the user interface. Testing is conducted to ensure functionality and error-free operation.

Challenges: During the development of the picture gallery application, I encountered several challenges. Firstly, integrating the Unsplash API to fetch pictures required a deep understanding of the API documentation and handling asynchronous requests with async/await. Secondly, creating a responsive grid layout that adapts to various screen sizes involved using CSS media queries and ensuring images display correctly on different devices. Additionally, securely managing the API key as an environment variable in a Vite-based React app was vital to protect sensitive information. 

```bash
npm install 
cd Acumen-Congnitive-Ass
npm run dev
```


## Technology Stack
List and provide a brief overview of the technologies used in the project.

- vite + React js
- dotenv 
