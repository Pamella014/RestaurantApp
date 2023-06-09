# Restaurant Management Application

This is a web application built using React.js that allows users to perform CRUD operations (Create, Read, Update, Delete) on restaurant details. Users can add new restaurants, view a list of restaurants, view detailed information about a restaurant, update restaurant details, and delete restaurants from the system.

## Features

- Restaurant Listing: Displays a list of restaurants with their names and basic details such as cuisine type and location.
- Restaurant Creation: Allows users to add new restaurants by providing details such as name, cuisine type, location, and an image of the restaurant.
- Restaurant Details: Shows detailed information about a selected restaurant, including its name, cuisine type, location, and the uploaded image.
- Restaurant Update: Provides an option to edit the details of a restaurant, including its name, cuisine type, location, and the uploaded image.
- Restaurant Deletion: Allows users to delete a restaurant from the system.

## Prerequisites

- Node.js and npm (Node Package Manager) must be installed on your machine.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/restaurant-management-app.git

2. Navigate to the project directory:

- cd restaurant-management-app

3. Install the dependencies:

-npm install

## Usage

1.Start the application:
### `npm start`
-Runs the app in the development mode

2.Open your web browser and go to http://localhost:3000 to access the application.

### `node Server.js`
- This will run your sever on http://localhost:3000

## API Routes
-The application uses an Express server to handle API requests for managing restaurant data. The API routes are as follows:

GET /api/restaurants: Get a list of all restaurants.
POST /api/restaurants: Create a new restaurant.
GET /api/restaurants/:id: Get details of a specific restaurant.
PUT /api/restaurants/:id: Update details of a specific restaurant.
DELETE /api/restaurants/:id: Delete a specific restaurant.

## Dependencies
axios: Promise-based HTTP client for making API requests.
react-router-dom: Routing library for React applications.
## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.
