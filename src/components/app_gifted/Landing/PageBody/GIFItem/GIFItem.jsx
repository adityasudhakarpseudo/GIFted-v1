import React, {Component} from 'react';

class GIFItem extends Component{

  constructor(props){
    super(props);
    this.state = {

    }
  }

  _toggleGIFAnimationState = (e) =>{
    let target = e.currentTarget;
    let item_value = target.getAttribute('data-item-value');
    let gif_actions_wrapper = target.querySelector('.play-pause-action-wrapper');
    let original_url = target.getAttribute('data-original-url');
    let original_still_url = target.getAttribute('data-original-still-url');
    if (item_value ==='pause'){
      target.style.cssText = 'background: url("' + original_still_url + '")';
      target.setAttribute('data-item-value','play')
      target.classList.add('active');
      gif_actions_wrapper.querySelector('.img-play').classList.remove('hidden');
      gif_actions_wrapper.querySelector('.img-pause').classList.add('hidden');
    } else {
      target.style.cssText = 'background: url("' + original_url + '")';
      target.setAttribute('data-item-value','pause');
      target.classList.remove('active');
      gif_actions_wrapper.querySelector('.img-play').classList.add('hidden');
      gif_actions_wrapper.querySelector('.img-pause').classList.remove('hidden');
    }
  }

  render(){
    return(
      <div 
        onClick={this._toggleGIFAnimationState}
        data-item-value="pause"
        data-original-url={this.props.itemDetails.images.original.url}
        data-original-still-url={this.props.itemDetails.images.original_still.url}
        className={
          'gif-item ' + (
            parseFloat(this.props.itemDetails.images.original.height) > 0 && parseFloat(this.props.itemDetails.images.original.height) < 300 ?
              'gif-item--medium'
            :
              parseFloat(this.props.itemDetails.images.original.height) >= 300 && parseFloat(this.props.itemDetails.images.original.width) < 799 ? 'gif-item--large' 
            : 
              parseFloat(this.props.itemDetails.images.original.width) >= 800 ? 'gif-item--large' 
            :
              ''
          )
        } 
        style={{background: 'url(' + this.props.itemDetails.images.original.url + ')'}} alt={this.props.itemDetails.title}>
        <div className="gif-item__details">
          {this.props.itemDetails.title}
        </div>
        <div className='play-pause-action-wrapper'>
          <img src="https://img.icons8.com/ios-filled/100/ffffff/circled-play.png" className='hidden img-play' alt='img-gif-play'/>
          <img src="https://img.icons8.com/ios-filled/100/ffffff/circled-pause.png" className='img-pause' alt='img-gif-pause'/>
        </div>
      </div>
    )
  }

}

export default GIFItem;