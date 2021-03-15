import React, { Component } from 'react';

import Container from './Components/Container/Container';
import SearchBar from './Components/SearchBar/SearchBar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';
import LoaderBlock from './Components/LoaderBlock/LoaderBlock';
import Modal from './Components/Modal/Modal';

import imagesApi from './services/images-api';

import styles from './App.module.css';

class App extends Component {
  state = {
    images: [],
    largeImageUrl: '',
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    showModal: false,
  };

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
    }, 2000);
  }

  handleImageClick = e => {
    const { name } = e.target;
    if (e.target !== e.currentTarget) {
      this.setState({ largeImageUrl: name });
      this.toggleModal();
    }
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, images: [] });
  };

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;

    const options = {
      searchQuery,
      currentPage,
    };

    this.setState({ isLoading: true });

    imagesApi
      .fetchImages(options)
      .then(hits => {
        this.setState(({ images, currentPage }) => ({
          images: [...images, ...hits],
          currentPage: currentPage + 1,
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { images, isLoading, showModal, largeImageUrl } = this.state;
    const shouldRenderLoadMoreBtn = images.length > 0 && !isLoading;
    return (
      <>
        <SearchBar onSubmit={this.onChangeQuery} />
        <Container>
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <img src={largeImageUrl} alt="" />
            </Modal>
          )}

          <div className={styles.App}>
            <ImageGallery
              imagesData={images}
              handleClick={this.handleImageClick}
            />

            {isLoading && <LoaderBlock />}
            {shouldRenderLoadMoreBtn && (
              <Button getMoreImages={this.fetchImages} />
            )}
          </div>
        </Container>
      </>
    );
  }
}

export default App;
