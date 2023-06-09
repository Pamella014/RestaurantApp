const express = require('express');
const app = express();
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

app.use(cors());
app.use(express.json());

let restaurants = [];

app.get('/api/restaurants', (req, res) => {
  res.json(restaurants);
});

app.post('/api/restaurants', (req, res) => {
  const { name, cuisine, location, image } = req.body;
  const newRestaurant = {
    id: uuidv4(),
    name,
    cuisine,
    location,
    image,
  };
  restaurants.push(newRestaurant);
  res.status(201).json(newRestaurant);
});

app.get('/api/restaurants/:id', (req, res) => {
  const { id } = req.params;
  const restaurant = restaurants.find((r) => r.id === id);
  if (!restaurant) {
    res.status(404).json({ error: 'Restaurant not found' });
  } else {
    res.json(restaurant);
  }
});

app.put('/api/restaurants/:id', (req, res) => {
  const { id } = req.params;
  const { name, cuisine, location, image } = req.body;
  const restaurant = restaurants.find((r) => r.id === id);
  if (!restaurant) {
    res.status(404).json({ error: 'Restaurant not found' });
  } else {
    restaurant.name = name;
    restaurant.cuisine = cuisine;
    restaurant.location = location;
    restaurant.image = image;
    res.json(restaurant);
  }
});

app.delete('/api/restaurants/:id', (req, res) => {
  const { id } = req.params;
  restaurants = restaurants.filter((r) => r.id !== id);
  res.sendStatus(204);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
