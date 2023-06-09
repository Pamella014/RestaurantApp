import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RestaurantDetails from './RestaurantDetails';
import { ApiRouteUrl } from './ApiRoute';
import { useNavigate } from "react-router-dom"


const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  const handleEditRestaurant= async (id) =>{
    try {
      await axios.get(`${ApiRouteUrl.apiUrl}/restaurants/${id}/edit`);
    } catch (error) {
      console.error(error);
    }
  }

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

  
  const deleteRestaurant = async (id) => {
    try {
      await axios.delete(`${ApiRouteUrl.apiUrl}/restaurants/${id}`);
    } catch (error) {
      console.error(error);
    }
  };
  
 

  return (
    <div className='container'>
      <div className='app-wrapper'>
      <h1>Restaurant List</h1>
      <button className='button-add'><Link to="/restaurants/create">Add Restaurant</Link></button>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <span>
          <h3><p>Name: {restaurant.name}</p> </h3>
          <h3><p>Location: {restaurant.location}</p></h3>
          <h3>Image:<img src={restaurant.image} alt={restaurant.name} /> </h3>
          </span>
         <p/>
          <button className='button-details'><Link to={`/restaurants/${restaurant.id}`}>Details</Link></button>
          <button className='button-edit'><Link to={`/restaurants/${restaurant.id}/edit`}>Edit</Link></button>
          <button className="button-delete"  onClick={() => deleteRestaurant(restaurant.id)}>Delete</button>
        </div>
      ))}
      </div>
     
    </div>
  );
};

export default RestaurantList;
