import React, { Component } from 'react'
import { Link } from 'react-router-dom';
 class BreedItem extends Component {

  render() {
      const {breed} = this.props
     
    return (
      <div className="col-md-3" >
        <div className="card">
            <div className="card-body">
    <h3 className="card-title">{breed.name}</h3>
    <h5 className="card-title">Origin:{breed.origin}</h5>
    <h5 className="card-title">Temperament:{breed.temperament}</h5>
               
                <Link to='' className="btn btn-info mr-1">
                  Details
                </Link>

            </div>
    </div>
</div>
    )
  }
}

export default  BreedItem