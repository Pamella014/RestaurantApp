import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import "../App.css";
import { ApiRouteUrl } from './ApiRoute';

const RestaurantCreate = () => {
  const [name, setName] = useState(''); 
  const [cuisine, setCuisine] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
      axios.post(`${ApiRouteUrl.apiUrl}/restaurants`, { name, cuisine, location, image }).then(res=>{
      
      }).catch (error =>{
        console.error(error);
      }) 
      navigate("/")
  };

  return (
    <div className='container'>
      <div className='app-wrapper'>
      <h1>Create Restaurant</h1>
      <form onSubmit={handleSubmit}>
      {/* <form> */}
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
          type="file"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <p/>
        <button className='button-create' type="submit">Create</button>
      </form>
      </div>
    </div>
  );
};

export default RestaurantCreate;
