import { useState } from 'react';
import { Item, Img } from './ImageGalleryItem.styled.js';
import { Modal } from 'components/Modal/Modal.jsx';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ collection }) => {
  const [show, setShow] = useState(false);

  const { id, webformatURL, tags } = collection;

  const onClickItem = () => {
    setShow(prev => !prev);
  };

  return (
    <Item key={id} onClick={onClickItem}>
      <Img src={webformatURL} alt={tags} />
      {show && <Modal onClickItem={onClickItem} collectionItems={collection} />}
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  collection: PropTypes.object.isRequired,
};
