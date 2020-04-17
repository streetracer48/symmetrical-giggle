import React, { Component } from 'react'
import { getbreeds } from '../actions/actions';
import { connect } from 'react-redux';
import BreedFeed from '../components/breedFeed'
import Loading from '../common/loading'
import { toUpperCase } from '../common/helpers';
class SearchLists extends Component {

    state = {
        searchedBreed: ''
    }

    componentDidMount () {
        this.searchBreedsByName()
    }

  componentDidUpdate(prevProps) {
    const currentUrlParam = this.props.match.params.breed;
    const prevUrlParam = prevProps.match.params.breed;

    if (currentUrlParam !== prevUrlParam) {
      this.searchBreedsByName();
    }
  }

    searchBreedsByName =() => {
        const searchedBreed = this.props.match.params.breed;
        this.setState({searchedBreed});
    
        this.props.dispatch(getbreeds(searchedBreed));
      }


  render() {
    const {breeds, loading} = this.props.items;
    const { searchedBreed } = this.state;

    let breedsContent;
    let title = '';

        if (breeds === null && loading) {
            breedsContent = <Loading/>;
        } else {
          if (breeds && breeds.length > 0) {
            title = `${toUpperCase(searchedBreed)}`;
            breedsContent = <BreedFeed breeds={breeds} />;
          } else {
            breedsContent = <h1>Your searched {toUpperCase(searchedBreed)} not found</h1>;
          }
        }
    return (
        <section className="hero-section pt-5 pb-5">
        <div className="container">
    <h3 className="text-center mb-5 ">Browse {title} Breeds</h3>
            <div className="row justify-content-center mt-5">
                {breedsContent}
            </div>
        </div>
    </section>
    )
  }
}
const mapStateToProps = state => ({
    items: state.breedsCat
  });

export default connect(mapStateToProps)(SearchLists)