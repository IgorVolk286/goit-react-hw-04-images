import React, { Component } from 'react';
import { Item, Img } from './ImageGalleryItem.styled.js';
import { Modal } from 'components/Modal/Modal.jsx';

export class ImageGalleryItem extends Component {
  state = {
    show: false,
  };
  onClickItem = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  };
  render() {
    const { webformatURL, id, tags } = this.props.collection;
    return (
      <Item key={id} onClick={this.onClickItem}>
        <Img src={webformatURL} alt={tags} />
        {this.state.show && (
          <Modal
            onClickItem={this.onClickItem}
            collectionItems={this.props.collection}
          />
        )}
      </Item>
    );
  }
}
