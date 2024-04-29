import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyList = () => {
  const [touristSpots, setTouristSpots] = useState([]);

  useEffect(() => {
    // Fetch user's tourist spots data from the backend
    const fetchTouristSpots = async () => {
      try {
        const response = await axios.get('http://localhost:5000/mylist'); // Update endpoint accordingly
        setTouristSpots(response.data);
      } catch (error) {
        console.error('Error fetching tourist spots:', error);
      }
    };

    fetchTouristSpots();
  }, []);

  const handleDelete = async (id) => {
    try {
      // Send request to delete the tourist spot with the given ID
      await axios.delete(`http://localhost:5000/mylist/${id}`); // Update endpoint accordingly
      // Remove the deleted spot from the state
      setTouristSpots(touristSpots.filter(spot => spot._id !== id));
    } catch (error) {
      console.error('Error deleting tourist spot:', error);
    }
  };

  return (
    <div>
      <h2>My Tourist Spots</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {touristSpots.map(spot => (
            <tr key={spot._id}>
              <td>{spot.tourists_spot_name}</td>
              <td>{spot.location}</td>
              <td>{spot.description}</td>
              <td>
                <Link to={`/update/${spot._id}`}>Update</Link>
                <button onClick={() => handleDelete(spot._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;
