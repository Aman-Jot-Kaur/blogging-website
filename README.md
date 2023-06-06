This is a blogging website developed using the MERN (MongoDB, Express, React, Node.js) stack, along with Material-UI for the user interface. The website allows users to read and write blogs, as well as edit and update their own blogs. It incorporates proper user authentication and authorization using MongoDB for the database and Redux for state management.

Features

User Registration and Login: Users can create an account by registering with their email and password. They can then log in using their credentials to access the website's features.

Blog Display: The website displays blogs from all users on the homepage, allowing visitors to read and explore various blog posts.

User Blogs: Registered users can create their own blog posts, which will be displayed on their personal blog page. This page showcases all the blogs created by a specific user.

Blog Edit and Update: Users have the ability to edit and update their own blog posts. They can make changes to the content, title, and other details of their blogs.

Proper Authentication and Authorization: User credentials are securely stored in the MongoDB database, and authentication is required to access protected routes. Users can only edit or delete their own blogs, preventing unauthorized access.

State Management: Redux is used for state management, providing a centralized store for managing the application's data.



Technologies Used

Frontend:

React: A JavaScript library for building user interfaces.

Material-UI: A popular React UI framework that provides pre-designed components for creating a visually appealing user interface.

Redux: A predictable state container for JavaScript applications, used for managing the application's state.

Axios: A promise-based HTTP client for making API requests.

Backend:

Node.js: A JavaScript runtime for executing server-side code.

Express: A web application framework for building APIs and handling server-side logic.

MongoDB: A NoSQL database used for storing user information, blogs, and other data.

Mongoose: A MongoDB object modeling tool used to interact with the database from Node.js.

Authentication and Authorization:

Bcrypt.js: A library used for hashing and salting passwords to enhance security.
