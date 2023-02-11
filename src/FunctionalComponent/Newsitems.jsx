import React from 'react'

export default function Newsitems(props) {
    return (
      <>
        <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
          <div className="card" >
            <img src={props.pic} className="card-img-top" alt="..." height="120px"/>
            <div className="card-body">
              <h5 className="card-title">{props.title.slice(0,70)+"..."}</h5>
              <hr/>

              <h6 className='card-source'>{props.name}-{`${new Date(props.date).getDate()}/${new Date(props.date).getMonth()}/${new Date(props.date).getFullYear()}`} </h6>
              <hr/>
              <p className="card-text">{props.description}</p>
              <a href={props.readmore }target="_blank" className="btn btn-sm nav-bg w-100 text-light">Read Full Article</a>
            </div>
          </div>

        </div>
      </>
    )
}
