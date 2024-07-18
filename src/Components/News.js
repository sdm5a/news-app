import React, {useEffect} from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';



const News = (props) => {
  const [articles,setArticles] = useState([]);
  const [page,setPage] = useState(1);
  const [totalResults,setTotalResults] = useState(0);
  const [loading,setLoading] = useState(false);
  //  document.title=`News Monk - ${capitalizeFirstLetter(props.category)}`;
 

  const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+ string.slice(1);
  }

  useEffect( () => {
    updateNews();
  }, []);

  const updateNews= async () =>{
   
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c48f7265c67a4329a55d126cef515ecb&page=${page}&pageSize=${props.pageSize}`;
    let data= await fetch(url);
    let objData= await data.json();
    
    setArticles(objData.articles);
    setTotalResults(objData.totalResults);
    setLoading(false);
  }


  const fetchMoreData = async () => {
    setPage(page+1);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c48f7265c67a4329a55d126cef515ecb&page=${page+1}&pageSize=${props.pageSize}`;
    let data= await fetch(url);
    let objData= await data.json();

    setArticles(articles.concat(objData.articles));
    setTotalResults(objData.totalResults);
    setLoading(false);
  };

    return (
     
      <>
        <h2 className='text-center my-4 pt-5'>News Monks -- Top {capitalizeFirstLetter(props.category)} Headlines</h2>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}>
          <div className="container">
            <div className="row">
              {!loading && articles.map((element)=>{
                    return (<div className="col-md-4">
                        <NewsItems title={element.title}  description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>)
              })}
            </div>
          </div>

        </InfiniteScroll>
  
      </>
    )
  
}

News.defaultProps={
  country:"in",
  pageSize:6,
  category:"general"
}

News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}

export default News;