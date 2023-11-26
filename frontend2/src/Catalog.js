import React, { useState } from 'react';
import ApiForm from './Apiform';
import FilterHeader from './Filter';


const Catalog = () => {

  const [filters, setFilters] = useState({
    filter1: 'option1',
    filter2: 'optionA',
    filter3: 'option3',
  });
  const [, setSearchValue] = useState('');

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div style={{paddingBottom: "100px", paddingTop: "120px"}}>
      <FilterHeader
        filters={filters}
        onFilterChange={handleFilterChange}
        onSearchChange={handleSearchChange}
      />
      <ApiForm/>
    </div>
  );
};

export default Catalog;
