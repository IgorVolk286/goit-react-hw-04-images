import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ListGallary } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ collections }) => {
  return (
    <ListGallary id="list">
      {collections.map(collection => (
        <ImageGalleryItem collection={collection} />
      ))}
    </ListGallary>
  );
};

ImageGallery.propTypes = {
  collections: PropTypes.array.isRequired,
};
