import React, { Component } from 'react';
import axios from 'axios';

import Container from './Components/Container/Container';
import SearchBar from './Components/SearchBar/SearchBar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';

const API_KEY = '19312346-1618d264863fa21be7207d71c';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 3000);
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, images: [] });
  };

  fetchImages = () => {
    this.setState({ isLoading: true });
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=5`,
      )
      .then(res => {
        this.setState(prevState => ({
          images: [...prevState.images, ...res.data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    return (
      <Container>
        <div className="App">
          <SearchBar onSubmit={this.onChangeQuery} />

          <ImageGallery imagesData={this.state.images} />
          {this.state.isLoading && <h1>Loading...</h1>}
          {this.state.images.length > 0 && !this.state.isLoading && (
            <Button getMoreImages={this.fetchImages} />
          )}
        </div>
      </Container>
    );
  }
}

export default App;
