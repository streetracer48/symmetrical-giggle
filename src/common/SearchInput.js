import React,{Component} from 'react';
import { withRouter } from 'react-router-dom';

class BreedsSearchInput extends Component {

  constructor() {
    super();

    this.searchInput = React.createRef();
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  }

  handleSearch() {
    const { history } = this.props;
    const breed = this.searchInput.current.value;

    breed ? history.push(`/breed/${breed}`) : history.push('/');
  }


  render() {
    return (
        <div className="input-group mt-5">
        <input type="search"  className="form-control" placeholder="Search by Name"  aria-label='Search' onKeyPress={(event) => { this.handleKeyPress(event)}}
               ref={this.searchInput}/>
        <div className="input-group-append" >
            <button onClick={() => {this.handleSearch()}} className="btn btn-outline-secondary" type='submit'>Search</button>
        </div>
    </div>
    )
  }
}


export default withRouter(BreedsSearchInput)