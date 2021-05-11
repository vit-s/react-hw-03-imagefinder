import React, {Component} from 'react'
import Spiner from './Loader'
import Error from './Error'
import ImageGallery from './ImageGallery'
import api from '../API/API'
import SearchBar from './SearchBar'
import Button from './Button'

class App extends Component {
  
  state = {
    images: [],
    err: false,
    loading: false,
    searchQuery: '',
    page: 1
  }
  
  componentDidUpdate(prevProps, prevState) {
    let prevQuery = prevState.searchQuery;
    let nextQuery = this.state.searchQuery;
    prevQuery !== nextQuery && this.fetchImages()
  }
  
  fetchImages = () => {
  
    let { searchQuery, page } = this.state;
    
    this.setState({ loading: true });
    
    api.API(searchQuery, page)
      .then(images => {
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...images],
            page: prevState.page + 1
          }
        })
      })
      .catch(err => this.setState({ err }))
      .finally(() => this.setState({loading: false}))
  
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }, 1000)
  }
  
  searchForSubmit = (query) => {
    this.setState({
      searchQuery: query,
      images: []
    })
  }
  render() {
    
    let {images, err, loading} = this.state
    
    return (
      <div>
        <SearchBar onSubmit={this.searchForSubmit}/>
        <ImageGallery images={images}/>
        {loading && <Spiner message={'Loading!!!'}/>}
        {images.length > 0 && <Button click={this.fetchImages}/>}
        {err && <Error error={`Something went wrong: ${err.message}`}/>}
      </div>
    )
  }
}

export default App