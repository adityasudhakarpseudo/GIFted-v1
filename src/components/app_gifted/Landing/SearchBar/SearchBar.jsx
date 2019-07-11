import React, { Component } from 'react';


class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  _formInputChange = (e) => {
    this.props.updateSearchKey(e)
  }

  _formSearchGIFByKeyword = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let target = e.currentTarget;
    let input_search = target.querySelector('input.form-control.filter-search').value
    if(input_search.length < 1){
      this.props.fetchTrendingGIFList();
    } else {
      this.props.initSearchByKeyword(input_search);
    }
    
  }

  render(){
    return(
      <div className='wrapper-search-bar'>
        <form className='search-bar-container wd-1150' id='form-search-gif' onSubmit={(e) => this._formSearchGIFByKeyword(e)}>
          {/* <div className='input-placeholder-text'>Enter Here</div> */}
          <input value={this.props.searchFilterKey} className='form-control filter-search' onChange={(e) => this._formInputChange(e)} placeholder='Search all the GIFs and Stickers' type='text' autoComplete='off'></input>
          <button className='btn btn-sm' type='submit' form='form-search-gif'>
            <img src="https://img.icons8.com/windows/32/ffffff/search-more.png" alt='search-button'/>
          </button>
        </form>
      </div>
    )
  }

}

export default SearchBar;