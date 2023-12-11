import React from 'react';
import { AppBar, Toolbar, InputBase, MenuItem, Select, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';

const FilterHeader = ({ filters, onFilterChange, onSearchChange }) => {
  return (
    <AppBar position="sticky" style={{ top: 120, backgroundColor: "#e0d8e2" }}>
      <Toolbar>
        <Typography variant="body2" color="inherit" style={{ margin: '3px' }}>
            Filter Animals:
        </Typography>
        <Select value={filters.animalsRange} onChange={(e) => onFilterChange('animalsRange', e.target.value)}>
          <MenuItem value="">No filter</MenuItem>
          <MenuItem value="1-100">Animals: 1-100</MenuItem>
          <MenuItem value="100-10000">Animals: 100-10000</MenuItem>
        </Select>
        <Typography variant="body2" color="inherit" style={{ margin: '3px' }}>
            Filter Visitors:
        </Typography>
        <Select value={filters.visitorsRange} onChange={(e) => onFilterChange('visitorsRange', e.target.value)}>
          <MenuItem value="">No filter</MenuItem>
          <MenuItem value="1-100">Visitors: 1-100</MenuItem>
          <MenuItem value="100-10000">Visitors: 100-10000</MenuItem>
        </Select>
        <Typography variant="body2" color="inherit" style={{ margin: '3px' }}>
            Filter Name:
        </Typography>
        <Select value={filters.nameLength} onChange={(e) => onFilterChange('nameLength', e.target.value)}>
          <MenuItem value="">No filter</MenuItem>
          <MenuItem value="1-10">Name Length: 1-10</MenuItem>
          <MenuItem value="10-100">Name Length: 10-100</MenuItem>
        </Select>

        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          <div style={{ position: 'relative', marginRight: 2 }}>
            <IconButton style={{ padding: '10px' }}>
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search…"
              onChange={(e) => onFilterChange('searchText', e.target.value)}
            />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default FilterHeader;
