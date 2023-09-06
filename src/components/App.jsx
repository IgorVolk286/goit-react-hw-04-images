import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
// import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    search: ' ',
    images: [],
    page: 1,
    loading: false,
    totalHits: ' ',
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page, images, totalHits } = this.state;
    window.scrollBy({
      top: 700,
      behavior: 'smooth',
    });
    if (images.length === totalHits) {
      toast.info(`YOU HAVE FULL COLLECTION `, {
        position: 'bottom-center',
      });
    }
    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ loading: true });

      fetch(
        `https://pixabay.com/api/?q=${search}&page=${page}&key=38330111-6d0efda7f4a8d995231e14698&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(respons => respons.json())
        .then(data => {
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            totalHits: data.totalHits,
          }));
        })

        .catch(error => toast.error('Try agane!'))
        .finally(() => this.setState({ loading: false }));

      //   await axios.get('https://pixabay.com/api/', {
      //     params: {
      //       page: this.state.page,
      //       q: this.state.search,
      //       per_page: '12',
      //       key: '38330111-6d0efda7f4a8d995231e14698',
      //     }
      //   }).then(resp => this.setState(prevState => ({
      //     images: [...prevState.images, ...resp.data.hits],
      //     totalHits: resp.data.totalHits,
      //   })).catch(error => toast.error('Try agane!'))
      //     .finally() => this.setState({ loading: false }))
      // };

      // axios.defaults.baseURL = 'https://pixabay.com/api/';
    }
  }

  onClickButtonLoad = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onSubmitForm = search => {
    this.setState({
      search,
      images: [],
      page: 1,
      totalHits: 1,
    });
  };

  render() {
    const { images, totalHits, loading } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onSubmitForm} />

        {images.length !== 0 && <ImageGallery collections={images} />}

        {images.length !== 0 && totalHits !== images.length && (
          <Button onClick={this.onClickButtonLoad} />
        )}
        {loading && <Loader />}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          theme="colored"
        />
      </div>
    );
  }
}
