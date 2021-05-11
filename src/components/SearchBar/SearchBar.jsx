import React, {Component} from 'react'

class SearchBar extends Component {

  state = {
    inputValue: ''
  }
  
  change = event => this.setState({ inputValue: event.target.value})
  
  submit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.inputValue)
    this.setState({ inputValue: ''})
  }
  
  render() {
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.submit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>
            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              value={this.state.inputValue}
              onChange={this.change}
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}

export default SearchBar