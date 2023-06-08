import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ApiRouteUrl } from './ApiRoute';

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const handleGetRestaurant = () => {
      axios.get(`${ApiRouteUrl.apiUrl}/restaurants/${id}`). then(res => {
         const data = res.data
         setRestaurant(data);
       }).catch (error => 
         console.error(error)) 
     }
 
   if (!restaurant) {
     return <div>Loading...</div>;
   }
    handleGetRestaurant();
  }, []);git push -u origin main



  return (
    <div>
      <h1>Restaurant Details</h1>
      <h2>{restaurant.name}</h2>
      <p>Cuisine Type: {restaurant.cuisine}</p>
      <p>Location: {restaurant.location}</p>
      <img src={restaurant.image} alt={restaurant.name} />
</div>
  );
};

export default RestaurantDetails;


curl -fsSL https://pgp.mongodb.com/server-6.0.asc | 
sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor