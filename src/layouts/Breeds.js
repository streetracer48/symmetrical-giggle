import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { getbreeds } from '../actions/actions';

class Breeds extends Component { 

    componentDidMount() {
        this.props.dispatch(getbreeds())
    }

    render() {

        console.log(this.props.items)
      
        return (
            <section className="hero-section pt-5 pb-5">
                <div className="container">
                <h3 className="text-center mb-5 ">Browse All Breeds</h3>
                    <div className="row justify-content-center mt-3">
                    
                 
        
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