import React, { Component } from "react";

export default class NewsItems extends Component {

  render() {
    let {title, description, imageUrl, url, author, date,source}=this.props;
    return (
      <div className="my-3">
            <div className="card">
                <div>
                  <span className="badge rounded-pill bg-danger" style={{display:"flex", justifyContent:"flex-end", right:"0", position:"absolute"}}>
                    {source}
                  </span>
                </div>
                <img src={!imageUrl?"https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg":imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} ...</h5>
                    <p className="card-text">
                    {description}
                    </p>
                    <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="btn  btn-sm btn-dark">
                    Read More
                    </a>
                </div>
            </div>
      </div>
    );
  }
}
