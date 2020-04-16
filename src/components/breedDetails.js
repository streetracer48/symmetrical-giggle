import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getbreedById } from '../actions/actions';
import Loading from '../common/loading'
class breedDetails extends Component {
    componentDidMount() {
        this.props.getbreedById(this.props.match.params.id);
      }

    render(){
        const { breed, loading } = this.props.breed;
         console.log(breed)
        let breedContent;

        if (breed === null ||  loading) {
            breedContent = <Loading/>
        } else {
          
            breedContent = (<div className="col-md-6">
            <div className="card">
                <div className="card-body">
        <h2 className="card-title">Name:{breed.name}</h2>
        <p className="muted">Description:{breed.description}</p>
        <h5 className="card-title">Temperament:{breed.temperament}</h5>
        <h5 className="card-title">Origin:{breed.origin}</h5>
                </div>
        </div>
    </div>)
        }
        return (
            <section className="hero-section pt-5 pb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        {breedContent}
                    </div>
                
                </div>
            </section>
          );

    }
  
}

const mapStateToProps = state => ({
    breed: state.breedsCat
  });


export default connect(mapStateToProps,{getbreedById})(breedDetails);