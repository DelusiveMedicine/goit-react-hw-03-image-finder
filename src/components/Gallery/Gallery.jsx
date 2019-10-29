import React from 'react';
import styles from './Gallery.module.css';

const Gallery = ({ items }) => {
  const { gallery } = styles;
  <ul className={gallery}>
    <PhotoCard />
  </ul>;
};

export default Gallery;
