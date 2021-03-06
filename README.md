# Real Ecommerce Like Amazon with React-NodeJS-MongoDB

A real full-stack fully-featured multi-seller marketplace

## 1- [Project setup]

1. [Done later in 4th step] Created Amazon folder
2. Created template folder
3. Created index.html
4. Added default HTML code
5. Link to style.css
6. Create header, main and footer

##### _Image of project setup_

![Image of project setup](/doc/photos/1.PNG)<br/>

## 2- [First Styling and Added Code Formatting]

1. Styled elements
2. Prettier set up

##### _First styling_

![First styling](/doc/photos/2.PNG)<br/>

## 3- [Display Products]

1. Create products div
2. Add product attributes
3. Add link, image, name and price

##### _Display hardcoded products_

![Display hardcoded products](/doc/photos/3.PNG)<br/>

## 4- [Create React App]

1. Moved everything in Amazon folder
2. npx create-react-app frontend in Amazon folder
3. npm start
4. Remove unused files
5. Copy index.html content to App.js
6. Copy style.css content to index.css
7. Replace class with className

##### _Each product personalized thanks to react_

![Each product personalized thanks to react](/doc/photos/4.PNG)<br/>

## 5- [Create Rating and Product Component]

1. Create components/Rating.js
2. Create div.rating
3. Style div.rating, span and last span
4. Create Product component
5. Use Rating component

## 6- [Build Product Screen and Added Images to README]

1. Install react-router-dom
2. Use BrowserRouter and Route for Home Screen
3. Create HomeScreen.js
4. Add product list code there
5. Create ProductScreen.js
6. Add new Route from product details to App.js
7. Create 3 columns for product image, info and action
8. Added images

##### _Example of in-stock product_

![Example of in-stock product](/doc/photos/6-1.PNG)<br/>

##### _Example of unavailable product_

![Example of unavailable product](/doc/photos/6-2.PNG)<br/>

##### _Tablet responsivity_

![Tablet responsivity](/doc/photos/6-3.PNG)<br/>

##### _Mobile responsivity_

![Mobile responsivity](/doc/photos/6-4.PNG)<br/>

## 7- [Create Node.JS Server and Numbered README]

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

##### _Server communication established_

![Server communication established](/doc/photos/7-1.PNG)<br/>

##### _Data retrieval_

![Data retrieval](/doc/photos/7-2.PNG)<br/>

## 8- [Load Products From Backend]

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

##### _Example of error_

![Example of error](/doc/photos/8-1.PNG)<br/>

##### _Loading on slow connection_

![Loading on slow connection](/doc/photos/8-2.PNG)<br/>

## 9- [Install ESlint For Code Linting]

1. Install VSCode eslint extension
2. npm install -D eslint
3. run ./node_modules/.bin/eslint --init
4. Create ./frontend/.env
5. Add SKIP_PREFLIGHT_CHECK=true

## 10- [Add Redux to Home Screen]

1. npm install redux react-redux
2. Create store.js
3. initState= {products:[]}
4. reducer = (state, action) => switch LOAD_PRODUCTS: {products: action.payload}
5. export default createStore(reducer, initState)
6. Edit HomeScreen.js
7. shopName = useSelector(state=>state.products)
8. const dispatch = useDispatch()
9. useEffect(()=>dispatch({type: LOAD_PRODUCTS, payload: data})
10. Add store to index.js

##### _Example of working redux_

![Example of working redux](/doc/photos/10.PNG)<br/>

## 11- [Add Redux to Product Screen]

1. Create product details constants, actions and reducers
2. Add reducer to store.js
3. Use action in ProductScreen.js
4. Add /api/product/:id to backend api

##### _Redux for Product Screen_

![Redux for Product Screen](/doc/photos/11.PNG)<br/>

## 12- [Handle Add To Cart Button]

1. Handle Add To Cart in ProductScreen.js
2. create CartScreen.js

###### _Handle Add To Cart Button_

![Handle Add To Cart Button](/doc/photos/12_1.PNG)<br/>

###### _Cart After Having Added Products_

![Cart After Having Added Products](/doc/photos/12_2.PNG)<br/>

## 13- [Implement Add to Cart Action + Fixed some bugs]

1. Create addToCart constants, actions and reducers
2. Add reducer to store.js
3. Use action in CartScreen.js
4. Render cartItems.length

##### _Example of cart in local storage as well_

![Example of cart in local storage as well](/doc/photos/13.PNG)<br/>

## 14- [Build Cart Screen]

1. Create 2 columns for cart items and cart actions
2. cartItems.length === 0 ? cart is empty
3. Show item image, name, qty and price
4. Proceed to Checkout button
5. Implement remove from cart action

##### _Example Cart Screen with Automatic Items and Price Count_

![Example Cart Screen with Automatic Items and Price Count](/doc/photos/14.PNG)<br/>

## 15- [Implement Remove From Cart Action]

1. Create removeFromCart constants, actions and reducers
2. Add reducer to store.js
3. Use action in CartScreen.js

##### _Example of Remove From Cart Action 1/2_

![Example of Remove From Cart Action 1/2](/doc/photos/15_1.PNG)<br/>

##### _Example of Remove From Cart Action 2/2_

![Example of Remove From Cart Action 2/2](/doc/photos/15_2.PNG)<br/>

## 16- [Create Sample Users In MongoDB]

1. npm install mongoose
2. Connect to mongodb
3. Create config.js
4. npm install dotenv
5. Export MONGODB_URL
6. Create models/userModel.js
7. Create userSchema and userModel
8. Create userRoute
9. Seed sample data

##### _Example of seedingDB with some user data by using "http://localhost:5000/api/users/seed" url_

![Example of seedingDB with some user data by using "http://localhost:5000/api/users/seed" url](/doc/photos/16_1.PNG)<br/>

##### _Example of error handling when trying to create the same user again_

![Example of error handling when trying to create the same user again](/doc/photos/16_2.PNG)<br/>

##### _Data on MongoDB Compass_

![Data on MongoDB Compass](/doc/photos/16_3.PNG)<br/>

## 17- [Create Sample Products In MongoDB]

1. Create models/productModel.js
2. Create productSchema and productModel
3. Create productRoute
4. Seed sample data

##### _Example of seedingDB with some product data by using "http://localhost:5000/api/product/seed" url_

![Example of seedingDB with some product data by using "http://localhost:5000/api/product/seed" url](/doc/photos/17_1.PNG)<br/>

##### _Example of error handling when trying to create the same product again_

![Example of error handling when trying to create the same product again](/doc/photos/17_2.PNG)<br/>

##### _Data retrieved successfully on client_

![Data retrieved successfully on client](/doc/photos/17_3.PNG)<br/>

## 18- [Create Sign-in Backend]

1. Create /signin api
2. Check email and password
3. Generate token
4. Install json web token
5. Install dotenv
6. Return token and data
7. Test it using postman

##### _Successful login_

![Successful login](/doc/photos/18_1.PNG)<br/>

##### _Unsuccessful login_

![Unsccessful login](/doc/photos/18_2.PNG)<br/>

## 19- [Design SignIn Screen]

1. Create SigninScreen
2. Render email and password fields
3. Create signin constants, actions and reducers
4. Update Header based on user login

##### _Signin screen_

![Sign in screen](/doc/photos/19.PNG)<br/>

## 20- [Implement SignIn Action]

1. Create signin constants, actions and reducers
2. Add reducer to store.js
3. Use action in SigninScreen.js

##### _Successful login_

![Successful login](/doc/photos/20_1.PNG)<br/>

##### _Unsuccessful login_

![Unsuccessful login](/doc/photos/20_2.PNG)<br/>

## 21- [Create Register Screen]

1. Create API for /api/users/register
2. Insert new user to database
3. Return user info and token
4. Create RegisterScreen
5. Add fields
6. Style fields
7. Add screen to App.js
8. Create register action and reducer
9. Check validation and create user

##### _Working registration page_

![Working registration page](/doc/photos/21.PNG)<br/>

## 22- [Create Shipping Screen]

1. Create CheckoutSteps.js component
2. Create shipping fields
3. Implement shipping constant, actions and reducers

##### _Self-Saving Shipping Information after check for Sign-In_

![Self-Saving Shipping Information after check for Sign-In](/doc/photos/22.PNG)<br/>

## 23- [Create Payment Screen]

1. Create payment fields
2. Implement shipping constant, actions and reducers

##### _Self-Saving Payment Option after check for Sign-In and Shipping Preferences_

![Self-Saving Payment Option after check for Sign-In and Shipping Preferences](/doc/photos/23.PNG)<br/>

## 24- [Design Place Order Screen]

1. Design order summary fields
2. Design order action

##### _Place Order UI_

![Place Order UI](/doc/photos/24.PNG)<br/>

## 25- [Create Place Order API]

1. CreateOrder api
2. Create orderModel
3. Create orderRouter
4. Create post order route

## 26- [Implement PlaceOrder Action]

1. Handle place order button click
2. Create place order constants, action and reducer

##### _OrderID created after checkout_

![OrderID created after checkout](/doc/photos/25.PNG)<br/>

## 27- [Create Order Screen]

1. Build order api for /api/orders/:id
2. Create OrderScreen.js
3. Dispatch order details action in useEffect
4. Load data with useSelector
5. Show data like place order screen
6. Create order details constant, action and reducer

##### _Order screen after checkout is completed_

![Order screen after checkout is completed](/doc/photos/26.PNG)<br/>

## 28- [Add PayPal Button]

1. Get client id from paypal
2. Set it in .env file
3. Create route form /api/paypal/clientId
4. Create getPaypalClientID in api.js
5. Add paypal checkout script in OrderScreen.js
6. Show paypal button

##### _Getting credentials on PayPayl sdk_

![Getting credentials on PayPayl sdk](/doc/photos/27_1.PNG)<br/>

##### _Order screen with PayPal integrated_

![Order screen with PayPal integrated](/doc/photos/27_2.PNG)<br/>
