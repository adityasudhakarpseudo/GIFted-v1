import React, {Component} from 'react';

class Filters extends Component{

  constructor(props){
    super(props);
    this.state = {

    }
    
  }

  _searchByAlphabetFilter = (e) => {
    let target = e.currentTarget;
    let filter_text = target.getAttribute('data-filter');
    let wrapper = target.closest('.filter-alphabets');
    wrapper.querySelector('.alphabet').classList.remove('active');
    target.classList.add('active');
    this.props.initSearchByKeyword(filter_text);
  }

  render(){
    return(
      <div className='col col-sm-12 no-padding wrapper-filters'>
        <div className='section-header'>
          GIPHY artists make fun, unique, and original artwork and share it via GIPHY.<br/>
          Explore the directory to meet them all!
        </div>
        <div className='filter-alphabets'>
          <span onClick={this._searchByAlphabetFilter} className='alphabet selected' data-filter="trending">all</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "random" ? ' active' : '')} data-filter="random">#</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "a" ? ' active' : '')} data-filter="a">a</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "b" ? ' active' : '')} data-filter="b">b</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "c" ? ' active' : '')} data-filter="c">c</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "d" ? ' active' : '')} data-filter="d">d</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "e" ? ' active' : '')} data-filter="e">e</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "f" ? ' active' : '')} data-filter="f">f</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "g" ? ' active' : '')} data-filter="g">g</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "h" ? ' active' : '')} data-filter="h">h</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "i" ? ' active' : '')} data-filter="i">i</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "j" ? ' active' : '')} data-filter="j">j</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "k" ? ' active' : '')} data-filter="k">k</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "l" ? ' active' : '')} data-filter="l">l</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "m" ? ' active' : '')} data-filter="m">m</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "n" ? ' active' : '')} data-filter="n">n</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "o" ? ' active' : '')} data-filter="o">o</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "p" ? ' active' : '')} data-filter="p">p</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "q" ? ' active' : '')} data-filter="q">q</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "r" ? ' active' : '')} data-filter="r">r</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "s" ? ' active' : '')} data-filter="s">s</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "t" ? ' active' : '')} data-filter="t">t</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "u" ? ' active' : '')} data-filter="u">u</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "v" ? ' active' : '')} data-filter="v">v</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "w" ? ' active' : '')} data-filter="w">w</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "x" ? ' active' : '')} data-filter="x">x</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "y" ? ' active' : '')} data-filter="y">y</span>
          <span onClick={this._searchByAlphabetFilter} className={'alphabet' + (this.props.searchFilterKey === "z" ? ' active' : '')} data-filter="z">z</span>
        </div>

      </div>
    )
  }

}

export default Filters;