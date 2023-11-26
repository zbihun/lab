import React, { useState, useEffect } from 'react';
import ItemCard from './Item';

const ApiForm = () => {
  const [formData, setFormData] = useState([]);
  const apiUrl = 'http://127.0.0.1:8000/zoo/'; // Replace with your actual API URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures the effect runs once on mount

  return (
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: "wrap", marginTop: "10px" }}>
        {formData.map((item, index) => (
          <ItemCard style={{flex: 1, margin: 10}} key={index} item={item} />
        ))
        }
        
    </div>
  );
};

export default ApiForm;
