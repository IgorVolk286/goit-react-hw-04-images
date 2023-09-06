import React, { Component } from 'react';
import { Overlay, Img, Div } from './Modal.styled';

export class Modal extends Component {
  onEscapeClick = e => {
    console.log(e.code);
    if (e.code === 'Escape') {
      this.props.onClickItem();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscapeClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapeClick);
  }

  onClickBackdrop = e => {
    // console.log(`curer`, e.currentTarget);
    // console.log(e.target);
    if (e.currentTarget !== e.target) {
      this.props.onClickItem();
    }
  };

  render() {
    const { largeImageURL } = this.props.collectionItems;
    return (
      <Overlay>
        <Div onClick={this.onClickBackdrop}>
          <Img src={largeImageURL} alt="picture" />
        </Div>
      </Overlay>
    );
  }
}
