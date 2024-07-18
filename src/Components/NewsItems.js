import React from "react";

const NewsItems = (props) => {

    let {title, description, imageUrl, url, author, date,source}=props;
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
                    <div className="d-flex justify-content-between align-items-center">
                      <a href={url} target="_blank" rel="noopener noreferrer" className="btn  btn-sm btn-dark">
                      Read More
                      </a>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmarks" viewBox="0 0 16 16" >
                        <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z"/>
                        <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1"/>
                      </svg>
                    </div>
                </div>
            </div>
      </div>
    );
  }

  export default NewsItems;
