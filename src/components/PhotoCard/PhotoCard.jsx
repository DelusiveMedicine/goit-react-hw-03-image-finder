import React, { Component, Fragment } from 'react';
import styles from './PhotoCard.module.css';
import Modal from '../Modal/Modal';

class PhotoCard extends Component {
  state = { isShown: false };

  toggleModal = ({event}) => {
    if(target.className.includes("overlay") || keyCode === 27)
      this.setState(({isShown}) => ({
      isShown: !isShown,
    }));
  };

  render() {
    const {
      photoCard,
      stats,
      statsItem,
      fullscreenButton,
      galleryItem,
    } = styles;
    const {
      webformatURL,
      tags,
      likes,
      views,
      comments,
      downloads,
      largeImageURL,
    } = this.props;
    
    const { isShown } = this.state;
    
    return (
      <Fragment>
        {isShown && (
          <Modal
            image={largeImageURL}
            alt={tags}
            toggleModal={this.toggleModal}
          />
        )}
        <div className={photoCard}>
          <img src={webformatURL} alt={tags} className={galleryItem} />

          <div className={stats}>
            <p className={statsItem}>
              <i className="material-icons">thumb_up</i>
              {likes}
            </p>
            <p className={statsItem}>
              <i className="material-icons">visibility</i>
              {views}
            </p>
            <p className={statsItem}>
              <i className="material-icons">comment</i>
              {comments}
            </p>
            <p className={statsItem}>
              <i className="material-icons">cloud_download</i>
              {downloads}
            </p>
          </div>

          <button
            type="button"
            className={fullscreenButton}
            onClick={this.toggleModal}
          >
            <i className="material-icons">zoom_out_map</i>
          </button>
        </div>
      </Fragment>
    );
  }
}

export default PhotoCard;
