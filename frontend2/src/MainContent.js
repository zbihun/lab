import React from 'react';
import ApiForm from './Apiform';
import Button from '@mui/material/Button';

const MainContent = () => {
  return (
    <main>
      <section>
        <ApiForm/>
        <div style={{marginLeft: "45%"}}>
        <Button variant="contained" disableElevation>
          Load More
        </Button>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
