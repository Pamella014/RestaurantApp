import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import RestaurantList from './Components/RestaurantList';
import RestaurantCreate from './Components/RestaurantCreate';
import RestaurantDetails from './Components/RestaurantDetails';
import RestaurantEdit from './Components/RestaurantEdit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<RestaurantList />} />
      <Route exact path="/restaurants/create" element={<RestaurantCreate/>} />
      <Route exact path="/restaurants/:id" element={<RestaurantDetails/>} />
      <Route exact path="/restaurants/:id/edit" element={<RestaurantEdit/>} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
