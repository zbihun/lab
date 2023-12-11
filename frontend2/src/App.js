import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import './Navigation.css';
import './MainContent.css';
import './Footer.css';
import Navigation from './Navigation';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Footer from './Footer';
import Catalog from './Catalog';
import ItemDetails from './ItemDetails'
import "./styles.css";
import logo from './logo.png';

const Home = () => <div style={{paddingBottom: "100px", paddingTop: "120px"}}>
  <Header/>
  <MainContent />
</div>;

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div style={{position: "fixed", left: "0", "top": "0", right: "0"}}>
      <AppBar position="static" style={{backgroundColor: "#7071E8", color: "#fff"}}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleSidebarToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div">
            Zoos
          </Typography>
          <Typography variant="h6" component="div" style={{marginLeft: "auto"}}>
            <img src={logo} alt="Logo" style={{ width: "70px", right: "0" }} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Navigation />
      </div>
        <Sidebar open={sidebarOpen} onClose={handleSidebarToggle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/details/:id" element={<ItemDetails />} />
          <Route path="/card" element={<Home />} />
        </Routes>
        <Footer />
    </Router>
  );
};


export default App;
