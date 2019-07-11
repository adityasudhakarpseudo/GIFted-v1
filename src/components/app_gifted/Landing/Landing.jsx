import React, { Component } from 'react';

import { connect } from 'react-redux';

// Importing Global Stylesheet for the whole page - SCSS/SASS
import './stylesheet.scss';


// Importing Parent Components of GIFted Landing Page.
import Navbar from './Navbar/Navbar';
import SearchBar from './SearchBar/SearchBar';
import PageBody from './PageBody/PageBody';
import Loader from './../../common/Loader/Loader';


// Importing AJAX Actions
import { fetchTrendingGIF } from './../../redux/app_gifted/Landing/actions/trendingGIF';
import { searchGIFByKeyword } from './../../redux/app_gifted/Landing/actions/GIFByKeyword';

class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      GIFItemsParams: {
        'limit' : 50,
        'offset' : 0
      },
      GIFItemsList: [],
      requiredListLoading: true,
      searching: false
    }
  }

  componentDidMount(){
    this.fetchTrendingGIFList();
  }

  componentDidUpdate(prevProps){
    if(this.props !== prevProps){
      
      if(!this.props.trendingGIFList.loading && this.props.trendingGIFList.response){
        let items_list = [...this.state.GIFItemsList, ...this.props.trendingGIFList.response.data]
        this.setState({
          GIFItemsList : items_list
        })
      }

    }
  }

  fetchTrendingGIFList = () => {
    let url_config = {
      method: 'get',
    };
    let ajax_contents = {
      formData: null,
      url_config: url_config,
      callbackFunction: () => {},
      params: Object.assign({}, this.state.GIFItemsParams)
    }

    this.props.dispatch(fetchTrendingGIF(ajax_contents))
  }

  _loadMoreGIFItems = () => {
    let params = Object.assign({}, this.state.GIFItemsParams);
    params.offset = params.offset + 50
    this.setState({
      GIFItemsParams: params
    });
    this.fetchTrendingGIFList();
  }

  _initSearchByKeyword = (input_value) => {
    let url_config = {
      method: 'get',
    };
    this.setState({
      requiredListLoading: false,
      searching: true
    });
    let ajax_contents = {
      formData: null,
      url_config: url_config,
      callbackFunction: this._callbackSearchWithKeyword,
      params: {
        limit: 0,
        offset: 0,
        q: input_value
      }
    }

    this.props.dispatch(searchGIFByKeyword(ajax_contents))
  }

  _callbackSearchWithKeyword = (response) => {
    let items_list = response.data.data;
    this.setState({
      GIFItemsList : items_list,
      searching: false
    })
  }

  render(){
    return(
      <div className='page-GIFted-landing row no-margin'>
        <Navbar></Navbar>
        <SearchBar
          initSearchByKeyword={this._initSearchByKeyword}
        ></SearchBar>
        {/* <SearchFilter></SearchFilter> */}
        {
          this.props.trendingGIFList.response && this.props.trendingGIFList.response.data.length && !this.state.searching ?
            <PageBody
              trendingGIFList={this.state.GIFItemsList}
              loadMoreGIFItems={this._loadMoreGIFItems}
              requiredListLoading={this.state.requiredListLoading}
            >
            </PageBody>
          :
            <Loader></Loader>
        }
        
      </div>
    )
  }

}

const mapStateToProps = state => {
  return{
    trendingGIFList: {
      loading: state.trendingGIFReducer.loading,
      response: state.trendingGIFReducer.result.data,
      error: state.trendingGIFReducer.error
    },
    searchedGIFList: {
      loading: state.GIFByKeywordReducer.loading,
      response: state.GIFByKeywordReducer.result.data,
      error: state.GIFByKeywordReducer.error
    }
  }
};


export default connect(mapStateToProps)(LandingPage);