import React from 'react'

const NewsItem = (props) => {
    let {title, description, imageUrl, idUrl, author, date ,source} = props
  
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{display: "flex",justifycontent: "end",position: "absolute",right: 0}}>
              <span className="badge rounded-pill bg-danger"> {source}</span>
          </div>
            <img style={{width: '100%',height: '200px',objectFit:'cover'}} src={imageUrl?imageUrl:"https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">By {author?author:'Unknown'} On {new Date(date).toGMTString()} </small></p>
                <a rel='noreferrer' href={idUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )
}

export default NewsItem