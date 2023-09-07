import React, { useEffect } from 'react';
import { Overlay, Img, Div } from './Modal.styled';
import PropTypes from 'prop-types';

export const Modal = ({ onClickItem, collectionItems }) => {
  const onClickBackdrop = e => {
    if (e.currentTarget !== e.target) {
      onClickItem();
    }
  };
  const { largeImageURL } = collectionItems;

  useEffect(() => {
    const onEscapeClick = e => {
      console.log(e.code);
      if (e.code === 'Escape') {
        onClickItem();
      }
    };
    window.addEventListener('keydown', onEscapeClick);

    return () => window.removeEventListener('keydown', onEscapeClick);
  }, [onClickItem]);

  return (
    <Overlay>
      <Div onClick={onClickBackdrop}>
        <Img src={largeImageURL} alt="picture" />
      </Div>
    </Overlay>
  );
};

Modal.propType = {
  collectionItems: PropTypes.object.isRequired,
  onClickItem: PropTypes.func.isRequired,
};

// export class Modal extends Component {
//   onEscapeClick = e => {
//     console.log(e.code);
//     if (e.code === 'Escape') {
//       this.props.onClickItem();
//     }
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.onEscapeClick);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onEscapeClick);
//   }

//   onClickBackdrop = e => {
//     // console.log(`curer`, e.currentTarget);
//     // console.log(e.target);
//     if (e.currentTarget !== e.target) {
//       this.props.onClickItem();
//     }
//   };

//   render() {
//     const { largeImageURL } = this.props.collectionItems;
//     return (
//       <Overlay>
//         <Div onClick={this.onClickBackdrop}>
//           <Img src={largeImageURL} alt="picture" />
//         </Div>
//       </Overlay>
//     );
//   }
// }
