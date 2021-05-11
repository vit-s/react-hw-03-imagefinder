import React from "react";
import ImageGalleryItem from './ImageGalleryItem'

let ImageGallery = props => {
  
  let {images} = props
  
  return (
    <ul className={`ImageGallery`}>
      {images.map(({id, webformatURL, largeImageURL}) =>
        <ImageGalleryItem
          key={id}
          srcImg={webformatURL}
          largeImg={largeImageURL}
        />,
      )}
    </ul>
  )
};

export default ImageGallery;
