import React, { useState, useEffect } from 'react';
import ItemCard from './Item';
import Button from '@mui/material/Button';
import api from './api/api';
import Loader from './Loader';

const ApiForm = ({ filters }) => {
  const [formData, setFormData] = useState([]);
  const [displayedItems, setDisplayedItems] = useState(3); // Number of items to display initially
  const [loading, setLoading] = useState(true);
  const apiUrl = 'http://127.0.0.1:8000/zoo/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiFilters = {};
        if (filters && 'animalsRange' in filters) {
          const [minAnimals, maxAnimals] = filters.animalsRange.split('-').map(Number);
          apiFilters["min_animals"] = minAnimals;
          apiFilters["max_animals"] = maxAnimals;
        }
        if (filters && 'visitorsRange' in filters) {
          const [minVisitors, maxVisitors] = filters.visitorsRange.split('-').map(Number);
          apiFilters["min_visitors"] = minVisitors;
          apiFilters["max_visitors"] = maxVisitors;
        }
        if (filters && 'nameLength' in filters) {
          const [minName, maxName] = filters.nameLength.split('-').map(Number);
          apiFilters["min_name_length"] = minName;
          apiFilters["max_name_length"] = maxName;
        }

        // const response = await axios.get(apiUrl, {
        //   params: apiFilters,
        // });
        setTimeout(() => {
          setLoading(false);
        }, 500);
        const data = await api.getZoos(apiFilters);
        const filteredData = applyFilters(data, filters);
        setFormData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, filters]);

  if (loading) {
    return <Loader />;
  }

  const loadMoreItems = () => {
    setDisplayedItems((prevDisplayedItems) => prevDisplayedItems + 3);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: '10px' }}>
      {formData.slice(0, displayedItems).map((item, index) => (
        <ItemCard style={{ flex: 1, margin: 10 }} key={index} item={item} i={index} />
      ))}
      {formData.length > displayedItems && (
        <div style={{ marginTop: '10px', marginLeft: '45%' }}>
          <Button variant="contained" disableElevation onClick={loadMoreItems}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

const applyFilters = (data, filters) => {
  if (!filters){
    return data;
  }
  if (filters.searchText === "") {
    return data;
  }

  return data.filter((item) => {
    const searchText = filters.searchText ? filters.searchText.toLowerCase() : '';
    const searchFilter =
      filters.searchText &&
      Object.values(item).some((value) => {
        return typeof value === 'string' && value.toLowerCase().includes(searchText);
      });

    return searchFilter;
  });
};

export default ApiForm;
