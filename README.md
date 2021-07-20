# Real Ecommerce Like Amazon with React-NodeJS-MongoDB

A real full-stack fully-featured multi-seller marketplace

# 1- [Project setup]

1. [Done later in 4th step] Created Amazon folder
2. Created template folder
3. Created index.html
4. Added default HTML code
5. Link to style.css
6. Create header, main and footer

![Image of project setup](/doc/photos/1.PNG)

# 2- [First Styling and Added Code Formatting]

1. Styled elements
2. Prettier set up

![First styling](/doc/photos/2.PNG)

# 3- [Display Products]

1. Create products div
2. Add product attributes
3. Add link, image, name and price

![Display hardcoded products](/doc/photos/3.PNG)

# 4- [Create React App]

1. Moved everything in Amazon folder
2. npx create-react-app frontend in Amazon folder
3. npm start
4. Remove unused files
5. Copy index.html content to App.js
6. Copy style.css content to index.css
7. Replace class with className

![Each product personalized thanks to react](/doc/photos/4.PNG)

# 5- [Create Rating and Product Component]

1. Create components/Rating.js
2. Create div.rating
3. Style div.rating, span and last span
4. Create Product component
5. Use Rating component

# 6- [Build Product Screen and Added Images to README]

1. Install react-router-dom
2. Use BrowserRouter and Route for Home Screen
3. Create HomeScreen.js
4. Add product list code there
5. Create ProductScreen.js
6. Add new Route from product details to App.js
7. Create 3 columns for product image, info and action
8. Added images

![Example of in-stock product](/doc/photos/6-1.PNG)
![Example of unavailable product](/doc/photos/6-2.PNG)
![Tablet responsivity](/doc/photos/6-3.PNG)
![Mobile responsivity](/doc/photos/6-4.PNG)

# 7- [Create Node.JS Server and Numbered README]

1. run npm init in root folder
2. Update package.json set type: module
3. Add .js to imports
4. npm install express
5. Create server.js
6. Add start command as node backend/server.js
7. Require express
8. Create route for / return backend is ready
9. Move products.js from frontend to backend
10. Create route for /api/products
11. Return products
12. run npm start

![Server communication established](/doc/photos/7-1.PNG)
![Data retrieval](/doc/photos/7-2.PNG)

# 8- [Load Products From Backend]

1. Edit HomeScreen.js
2. Define products, loading and error
3. Create useEffect
4. Define async fetchData and call it
5. Install axios
6. Get data from /api/products
7. Show them in the list
8. Create Loading Component
9. Create Message Box Component
10. Use them in HomeScreen

![Example of error](/doc/photos/8-1.PNG)
![Loading on slow connection](/doc/photos/8-2.PNG)
