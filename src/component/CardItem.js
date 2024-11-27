import React, { Component } from 'react'

export class CardItem extends Component {
  render() {
    let {title,description,imageurl}=this.props
    return (
      <div>
        <div>
                    <div className='container mb-3'>
                        <div className="card col-3 " >
                            <img src={imageurl} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text"> {description}</p>
                                <a href="/" className="btn btn-secondary margin">save</a>
                                <a href="/" className="btn btn-secondary">like</a>
                            </div>
                            </div>
                           
                        </div>
                        </div>
      </div>
    )
  }
}

export default CardItem
