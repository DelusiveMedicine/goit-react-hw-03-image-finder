import React from 'react';
import styles from './PhotoCard.module.css';

const PhotoCard = () => {
  const { photoCard, stats, statsItem, fullscreenButton, galleryItem } = styles;
  return (
    <div className={photoCard}>
      <img src="" alt="" className={galleryItem} />

      <div className={stats}>
        <p className={statsItem}>
          <i className="material-icons">thumb_up</i>
          1108
        </p>
        <p className={statsItem}>
          <i className="material-icons">visibility</i>
          320321
        </p>
        <p className={statsItem}>
          <i className="material-icons">comment</i>
          129
        </p>
        <p className={statsItem}>
          <i className="material-icons">cloud_download</i>
          176019
        </p>
      </div>

      <button type="button" className={fullscreenButton}>
        <i className="material-icons">zoom_out_map</i>
      </button>
    </div>
  );
};

export default PhotoCard;
