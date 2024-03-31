import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



export default class News extends Component {

  static defaultProps={
    country:"in",
    pageSize:6,
    category:"general"
  }

  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }

  capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+ string.slice(1);
  }

  constructor(props){
    super(props);
    this.state={
      articles:[],
      page:1,
      totalResults:0,
      loding:false
    }
    document.title=`News Monk - ${this.capitalizeFirstLetter(this.props.category)}`;
  }

  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c48f7265c67a4329a55d126cef515ecb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loding:true});
    let data= await fetch(url);
    let objData=await data.json();
    this.setState({
      articles:objData.articles,
      totalResults:objData.totalResults,
      loding:false
    });
    
  }

  async updateNews(){
    this.props.setProgress.setProgress(30);
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c48f7265c67a4329a55d126cef515ecb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data= await fetch(url);
    this.props.setProgress(50);
    let objData=await data.json();
    this.setState({
      articles:objData.articles,
      totalResults:objData.totalResults,
      loding:false
    });
    this.props.setProgress(100);
  }

  handleNext = async ()=>{
    this.setState({page:this.state.page+1})
    this.updateNews();
  }

  handlePrevious = async ()=>{
    this.setState({page:this.state.page-1})
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({page:this.state.page+1})
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c48f7265c67a4329a55d126cef515ecb&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data= await fetch(url);
    let objData=await data.json();
    this.setState({
      articles:this.state.articles.concat(objData.articles),
      totalResults:objData.totalResults,
      loding:false
    });
  };

  
  render() {
    return (
     
      <>
        <h2 className='text-center my-4 pt-5'>News Monks -- Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
        {this.state.loding && <Spinner/>}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}>
          <div className="container">
            <div className="row">
              {!this.state.loding && this.state.articles.map((element)=>{
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
}
