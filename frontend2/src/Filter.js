import React from 'react';
import { AppBar, Toolbar, InputBase, MenuItem, Select, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const FilterHeader = ({ filters, onFilterChange, onSearchChange }) => {
  return (
    <AppBar position="static" style={{backgroundColor: "#e0d8e2"}}>
      <Toolbar>
        <Select value={filters.filter1} onChange={(e) => onFilterChange('filter1', e.target.value)}>
          <MenuItem value="option1" selected>Filter 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
        </Select>
        <Select value={filters.filter2} onChange={(e) => onFilterChange('filter2', e.target.value)}>
          <MenuItem value="optionA" selected>Filter 2</MenuItem>
          <MenuItem value="optionB">Option B</MenuItem>
        </Select>
        <Select value={filters.filter3} onChange={(e) => onFilterChange('filter3', e.target.value)}>
          <MenuItem value="option3" selected>Filter 3</MenuItem>
          <MenuItem value="option4">Option B</MenuItem>
        </Select>

        <div sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          <div sx={{ position: 'relative', mr: 2 }}>
            <IconButton sx={{ p: '10px' }}>
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search…"
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default FilterHeader;
