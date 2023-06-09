import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ApiRouteUrl } from './ApiRoute';

const RestaurantEdit = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
  const [filename, setFilename] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    handleGetRestaurant();
  }, []);

  const handleGetRestaurant = () => {
    axios.get(`${ApiRouteUrl.apiUrl}/restaurants/${id}`).then(res=>{
        const { name, cuisine, location, image } = res.data;
        setName(name);
        setLocation(location);
        setCuisine(cuisine)
        setImage(image)
      }).catch (error =>(
        console.error(error)
      ))
    }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${ApiRouteUrl.apiUrl}/restaurants/${id}`, { name, cuisine, location, image})
      navigate(`/restaurants/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='app-container'>
      <div className='app-wrapper'>
      <h1>Edit Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <input
         className='restaurant-item'
         type="text"
         placeholder="Name"
         value={name}
         onChange={(e) => setName(e.target.value)}
         required
       />
       <p/>
       <input
         className='restaurant-item'
         type="text"
         placeholder="Cuisine Type"
         value={cuisine}
         onChange={(e) => setCuisine(e.target.value)}
         required
       />
       <p/>
       <input
         className='restaurant-item'
         type="text"
         placeholder="Location"
         value={location}
         onChange={(e) => setLocation(e.target.value)}
         required
       />
       <p/>
       <input
         className='restaurant-item'
         type="filename"
         placeholder="Image URL"
         value={image}
         onChange={(e) => setImage(e.target.value)}
         required
       />
        <button type="submit">Update</button>
      </form>
      </div>
     
    </div>
  );
};

export default RestaurantEdit;
