import React, {Component} from 'react'
import Modal from '../../Modal'

class ImageGalleryItem extends Component {
  
  state = {
    showModal: false,
  };
  
  toggle = () => this.setState(prevState => ({showModal: !prevState.showModal}))
  
  
  render() {
    let {srcImg, largeImg} = this.props
    return (
      <>
        <li className="ImageGalleryItem">
          <img
            src={srcImg}
            alt=""
            className="ImageGalleryItem-image"
            onClick={this.toggle}
          />
        </li>
        {this.state.showModal && <Modal src={largeImg} onClose={this.toggle}/>}
      </>
    )
  }
}

export default ImageGalleryItem