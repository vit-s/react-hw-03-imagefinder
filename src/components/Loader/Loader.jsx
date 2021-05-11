import React, {Component} from 'react'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class Spiner extends Component {
  render() {
    return (
      <>
        <Loader
          style={{
            display: 'block',
            margin: '0 auto',
            width: 'fit-content'
          }}
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
        />
      </>
      
    )
  }
}

export default Spiner