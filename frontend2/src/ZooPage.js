import React, { useState } from 'react';
import FilterHeader from './Filter';
import ApiForm from './Apiform';

const ZooPage = () => {
  const [filters, setFilters] = useState({
    animalsRange: '',
    visitorsRange: '',
    nameLength: '',
    searchText: '',
  });

  const handleFilterChange = (filterName, value) => {
    console.log(filterName, value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };
  
  return (
    <div>
      <FilterHeader filters={filters} onFilterChange={handleFilterChange}/>
      <ApiForm filters={filters} />
    </div>
  );
};

export default ZooPage;
