import React, {Component} from 'react';

class Filters extends Component{

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div className='col col-sm-12 no-padding wrapper-filters'>
        <div className='section-header'>
          GIPHY artists make fun, unique, and original artwork and share it via GIPHY.<br/>
          Explore the directory to meet them all!
        </div>
        <div className='filter-alphabets'>
          <span className='alphabet selected'>all</span>
          <span className='alphabet'>#</span>
          <span className='alphabet'>a</span>
          <span className='alphabet'>b</span>
          <span className='alphabet'>c</span>
          <span className='alphabet'>d</span>
          <span className='alphabet'>e</span>
          <span className='alphabet'>f</span>
          <span className='alphabet'>g</span>
          <span className='alphabet'>h</span>
          <span className='alphabet'>i</span>
          <span className='alphabet'>j</span>
          <span className='alphabet'>k</span>
          <span className='alphabet'>l</span>
          <span className='alphabet'>m</span>
          <span className='alphabet'>n</span>
          <span className='alphabet'>o</span>
          <span className='alphabet'>p</span>
          <span className='alphabet'>q</span>
          <span className='alphabet'>r</span>
          <span className='alphabet'>s</span>
          <span className='alphabet'>t</span>
          <span className='alphabet'>u</span>
          <span className='alphabet'>v</span>
          <span className='alphabet'>w</span>
          <span className='alphabet'>x</span>
          <span className='alphabet'>y</span>
          <span className='alphabet'>z</span>
        </div>

      </div>
    )
  }

}

export default Filters;