import React from 'react';
import styles from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';

const Gallery = ({ items }) => {
  const { gallery } = styles;
  return (
    <ul className={gallery}>
      <PhotoCard />
    </ul>
  );
};

export default Gallery;
