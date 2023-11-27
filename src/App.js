import './App.css';
import React, {useState, useEffect, useMemo} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Categories from './components/pages/categories';
import About from './components/pages/about';
import Contact from './components/pages/contact'
import AppNavbar from './components/Navbar/Navbar';
import Home from './components/pages/home';
import Footer from './components/Footer/Footer';

import axios from 'axios';

function App() {
  const [articles, setArticles] = useState(null);
  
  async function getArticles() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/articles/');
      
      if (!response.data.includes(articles)) {
        // sort response data by date and then setAricles
        setArticles(response.data);
      }
      
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getArticles();
  }, []);

  const csrftoken = useMemo(() => {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('csrftoken=')).split('=')[1];
      return cookieValue
  })

  return (
    <div>
      <Router>
        <AppNavbar csrftoken={csrftoken}/>
        <Routes>
          <Route exact path='/' element={<Home articles={articles} />} />
          <Route path='/categories/localnews' element={<Categories category={"LOCALNEWS"} articles={articles} />} />
          <Route path='/categories/touristnews' element={<Categories category={"TOURISTNEWS"} articles={articles} />} />
          <Route path='/categories/technology' element={<Categories category={"TECHNOLOGY"} articles={articles} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
