import React, {Component} from 'react';

import GIFItem from './GIFItem/GIFItem';
import Filters from './Filters/FIlters';
import Loader from '../../../common/Loader/Loader';

class PageBody extends Component{

  constructor(props){
    super(props);
    this.state = {

    }
  }

  _GIFItemsListScrolled = (e) =>{
    if(e.currentTarget.offsetHeight + e.currentTarget.scrollTop === e.currentTarget.scrollHeight && this.props.requiredListLoading){
      this.props.loadMoreGIFItems()
    }
  }

  render(){
    console.log(this.props);
    return(
      <div className='wrapper-page-body'>
        <div className='wd-1150'>
          <Filters></Filters>
          <div className='col-sm-12 no-padding gif-items-list scroll-container' onScroll={this._GIFItemsListScrolled}>
            <div className='grid'>
              {
                this.props.trendingGIFList && this.props.trendingGIFList.length ?
                  this.props.trendingGIFList.map((gif_item, key) => (
                      gif_item.title.length ?
                        <GIFItem 
                          key={key}
                          itemDetails={gif_item}
                        >
                        </GIFItem>
                      :
                        null
                  ))
                :
                  null
              }
            </div>
            {
              this.props.requiredListLoading && this.props.trendingGIFList.length ?
                <Loader></Loader>
              :
                null
            }
          </div>
        </div>
      </div>
    )
  }

}

export default PageBody;