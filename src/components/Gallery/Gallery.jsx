import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';

const Gallery = ({ items, showModal }) => {
  const { gallery } = styles;
  return (
    <ul className={gallery}>
      {items.map(item => (
        <li key={item.id}>
          <PhotoCard {...item} showModal={showModal} />
        </li>
      ))}
    </ul>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  showModal: PropTypes.func,
};

export default Gallery;
