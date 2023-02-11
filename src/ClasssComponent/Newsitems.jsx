import React, { Component } from 'react'

export default class Newsitems extends Component {
  render() {
    return (
      <>
        <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
          <div className="card" >
            <img src={this.props.pic} className="card-img-top" alt="..." height="120px"/>
            <div className="card-body">
              <h5 className="card-title">{this.props.title.slice(0,70)+"..."}</h5>
              <hr/>

              <h6 className='card-source'>{this.props.name}-{`${new Date(this.props.date).getDate()}/${new Date(this.props.date).getMonth()}/${new Date(this.props.date).getFullYear()}`} </h6>
              <hr/>
              <p className="card-text">{this.props.description}</p>
              <a href={this.props.readmore }target="_blank" className="btn btn-sm nav-bg w-100 text-light">Read Full Article</a>
            </div>
          </div>

        </div>
      </>
    )
  }
}
