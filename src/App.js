import React, { Component } from 'react';
import axios from 'axios';

const API_KEY = '19312346-1618d264863fa21be7207d71c';

class App extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=5`,
      )
      .then(res => {
        this.setState({ images: res.data.hits });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Images</h1>
        <ul>
          {this.state.images.map(image => (
            <li key={image.id}>
              <img src={image.webformatURL} alt="" width="100" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
