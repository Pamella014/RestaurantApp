import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RestaurantDetails from './RestaurantDetails';
import { ApiRouteUrl } from './ApiRoute';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const handleGetRestaurant = async () => {
      try {
        const response = await axios.get(`${ApiRouteUrl.apiUrl}/restaurants`);
        setRestaurants(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    handleGetRestaurant();
  }, []);

  const handleEditRestaurant = () =>{

  }
  const deleteRestaurant = async (id) => {
    try {
      await axios.delete(`/api/restaurants/${id}`);
      // handleGetRestaurant();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container'>
      <div className='app-wrapper'>
      <h1>Restaurant List</h1>
      <Link to="/restaurants/create">Add Restaurant</Link>
      {/* <RestaurantDetails/> */}
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
          <p>Location: {restaurant.location}</p>
          {/* <img src={restaurant.image} alt={restaurant.name} /> */}
          <Link to={`/restaurants/${restaurant.id}`}>Details</Link>
          <button><Link to={`/restaurants/${restaurant.id}/edit`}>Edit</Link></button>
          <button>Delete</button>
        </div>
      ))}
      </div>
     
    </div>
  );
};

export default RestaurantList;
