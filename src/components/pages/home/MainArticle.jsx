import ReactMarkdown from 'react-markdown';


const mainArticle = (props) => {
  
  return (
    <div className='main-article'>
        {props.mainArticle && (
        <div className=""> 
            <h1>{props.mainArticle.title}</h1>
            <img className="main-article-img" src={props.mainArticle.image} alt="" />
            <ReactMarkdown>{props.mainArticle.article_body}</ReactMarkdown>
            <p className='creator-p'>Created by {props.mainArticle.creator}</p>
        </div> 
        )}
    </div>
  );
};
 
export default mainArticle;