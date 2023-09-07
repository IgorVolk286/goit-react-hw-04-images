import React, { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
// import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchApi } from './Api';

export const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalHits, setTotalHits] = useState('');

  const onClickButtonLoad = () => {
    setPage(prevPage => prevPage + 1);
  };

  const onSubmitForm = search => {
    setSearch(search);
    setImages([]);
    setPage(1);
    setTotalHits(1);
  };

  useEffect(() => {
    if (!search) {
      return;
    }
    setLoading(true);
    fetchApi(search, page)
      .then(data => {
        setImages(prevImages => [...prevImages, ...data.hits]);
        setTotalHits(data.totalHits);
      })
      .catch(error => toast.error('Try agane!'))
      .finally(() => setLoading(false));
  }, [search, page]);

  window.scrollBy({
    top: 700,
    behavior: 'smooth',
  });

  //     const re = async((search, page) => {
  //       try {
  //         setLoading(true);
  //         const image = await FetchApi(search, page);
  //         setImages(prevImages => [...prevImages, ...image.hits]);
  //         setTotalHits(image.totalHits)

  //       } catch ((error => toast.error('Try agane!')))
  //         finally(() => setLoading(false))
  //   });
  //   window.scrollBy({
  //     top: 700,
  //     behavior: 'smooth',
  //   });
  // }, [search, page]);

  // fetchApi(search, page)
  //   .then(data => {
  //     setImages(prevImages => [...prevImages, ...data.hits]);
  //     setTotalHits(data.totalHits);
  //   })
  //   .catch(error => toast.error('Try agane!'))
  //   .finally(() => setLoading(false));
  // }, [search, page]);

  // window.scrollBy({
  //   top: 700,
  //   behavior: 'smooth',
  // });

  return (
    <div>
      <Searchbar onSubmit={onSubmitForm} />

      {images.length !== 0 && <ImageGallery collections={images} />}

      {images.length !== 0 && totalHits !== images.length && (
        <Button onClick={onClickButtonLoad} />
      )}
      {loading && <Loader />}
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </div>
  );
};
