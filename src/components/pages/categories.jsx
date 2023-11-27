import React, { useEffect, useState } from "react";

import './css/category.css'
import './css/home.css'

import Newsletter from "./home/Newsletter";
import Carousel from "./home/Carousel";
import Banner from "./home/Banner";
import MainArticle from "./home/MainArticle";

function Category (props){
    const [category, setCategory] = useState('');
    const [articlesCategory, setArticlesCategory] = useState([]);
    const [mainArticle, setMainArticle] = useState(null);

    const filterByCategory = (category) => {
        if(props.articles){
            console.log(props.articles);
            const filteredArticles = props.articles.filter((article) => article.category.toUpperCase() == category);
            console.log(filteredArticles);
            setArticlesCategory(filteredArticles);
            console.log(articlesCategory);
        }
    }

    useEffect(() => {
        setCategory(props.category)
    }, [props.articles])

    useEffect(() => {
        filterByCategory(props.category)
    }, [category, props.articles])

    return (
        <div className="categories-div">
            <h1>{category} PAGE</h1>

            {mainArticle && <div className="container-asides-article">
                <Banner />
                {mainArticle && <MainArticle mainArticle={mainArticle}/>}
                <Banner />
            </div>}

            {articlesCategory && <Carousel handleMainArticle={setMainArticle} articles={articlesCategory} />}
            <hr className='carousel-hr'/>
            <Newsletter />
        </div>
    )
}

export default Category;