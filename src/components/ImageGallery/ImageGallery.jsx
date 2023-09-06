import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ListGallary } from './ImageGallery.styled';

export const ImageGallery = ({ collections }) => {
  return (
    <ListGallary id="list">
      {collections.map(collection => (
        <ImageGalleryItem collection={collection} />
      ))}
    </ListGallary>
  );

  //    const { height: cardHeight } = document;

  //  .querySelector('#list')
  //   .firstElementChild.getBoundingClientRect();

  // window.scrollBy({
  //   top: cardHeight * 2,
  //   behavior: 'smooth',
  // });
  // );
};
