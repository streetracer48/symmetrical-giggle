import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { getbreeds } from '../actions/actions';
import BreedFeed from '../components/breedFeed'
import Loading from '../common/loading'

class Breeds extends Component { 

    componentDidMount() {
        this.props.dispatch(getbreeds())
    }

    render() {
        const {breeds, loading} = this.props.items;
        console.log('loading', loading)
        let breedsContent;

        if (breeds === null && loading) {
            breedsContent = <Loading/>;
        } else {
          if (breeds && breeds.length > 0) {
            breedsContent = <BreedFeed breeds={breeds} />;
          } else {
            breedsContent = <p>Breeds not found</p>;
          }
        }
      
        return (
            <section className="hero-section pt-5 pb-5">
                <div className="container">
                <h3 className="text-center mb-5 ">Browse All Breeds</h3>
                    <div className="row justify-content-center mt-3">
                    
                 {breedsContent}
        
                    </div>
                </div>
            </section>
          );

    }
  
};

const mapStateToProps = state => ({
    items: state.breedsCat
  });


export default connect(mapStateToProps)(Breeds);