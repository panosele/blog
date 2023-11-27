import React, {useState, useEffect} from 'react';
import './css/carousel.css';


/**
 * Carousel component that displays a carousel of articles.
 * @param {Object} props - The component props.
 * @param {Array} props.articles - The list of articles to display.
 * @param {Function} props.handleMainArticle - The function to handle clicking on a main article.
 * @returns {JSX.Element} - The rendered Carousel component.
 */
function Carousel(props) {
    // State to store the articles to click
    const [articlesToClick, setArticlesToClick] = useState([]);

    // Update articlesToClick when props.articles changes
    useEffect(() => {
        if (props.articles !== null) {
            if (props.articles.length < 8) {
                setArticlesToClick(props.articles.reverse());
            }else{
                setArticlesToClick(props.articles.slice(-8, props.articles.length -1).reverse());
            }
            
        }
    }, [props.articles]);

    /**
     * Handle click event on an article.
     * @param {Object} e - The event object.
     */
    function handleClick(e) {
        const clickedArticle = props.articles.find((article) => article.id == e.target.id);
        if (clickedArticle) {
            props.handleMainArticle(clickedArticle);
        }
        window.scrollTo(0, 0);
    }

    return (
        <>
            <hr className='carousel-hr' />
            <div className="articles-to-click-div">
                {props.articles && articlesToClick.map((article, i) => (
                    <div key={i} className='card-container'>
                        <img className='card-img' src={article.image} alt="" />
                        <h4 id={article.id} className='card-title' onClick={handleClick}>{article.title.toUpperCase()}</h4>
                        <a href={`/categories/${article.category.toLowerCase()}`}><h6 className="card-category">{article.category.toUpperCase()}</h6></a>
                        <p className="card-date">Date: {article.date.slice(0, 10)}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Carousel;