import React, {useState, useEffect} from 'react';
import Banner from './home/Banner';
import Carousel from './home/Carousel';
import Sponsors from './home/Sponsors';
import Newsletter from './home/Newsletter';
import ReactMarkdown from 'react-markdown';

import "./css/home.css"
 

// This component represents the home page of the application.
// It displays a main article and a carousel of articles.
const Home = (props) => {
  // State variables to hold the main article and body paragraphs
  const [mainArticle, setMainArticle] = useState(null);

  // Fetches the main article when the articles prop changes
  useEffect(() => {
    if (props.articles !== null && props.articles.length > 0) {
      setMainArticle(props.articles[props.articles.length - 1]);
    }
  }, [props.articles]);

  // Renders the home page content
  return (
    <div className="home-div">
      <h1>Welcome to HOME PAGE</h1>

      <div className="container-asides-article">
        <Banner />
        {mainArticle && (
          <div className="main-article">
            <h1>{mainArticle.title}</h1>
            <img className="main-article-img" src={mainArticle.image} alt="" />
            <ReactMarkdown>{mainArticle.article_body}</ReactMarkdown>
            <p className='creator-p'>Created by {mainArticle.creator}</p>
          </div>
        )}
        <Banner />
      </div>
      
      <Carousel handleMainArticle={setMainArticle} articles={props.articles}/>

      <Sponsors />

      <Newsletter />
      
    </div>
  );
};
 
export default Home;