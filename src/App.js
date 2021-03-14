import React, { Component } from 'react';
import axios from 'axios';

import Container from './Components/Container/Container';
import SearchBar from './Components/SearchBar/SearchBar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';
import LoaderBlock from './Components/LoaderBlock/LoaderBlock';

import styles from './App.module.css';

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
    const { searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery) {
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
    const { searchQuery, currentPage } = this.state;

    this.setState({ isLoading: true });
    axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
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
    const { images, isLoading } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.onChangeQuery} />
        <Container>
          <div className={styles.App}>
            <ImageGallery imagesData={images} />

            {isLoading && <LoaderBlock />}
            {images.length > 0 && !isLoading && (
              <Button getMoreImages={this.fetchImages} />
            )}
          </div>
        </Container>
      </>
    );
  }
}

export default App;
