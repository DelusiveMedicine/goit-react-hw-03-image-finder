import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

class Modal extends Component {
  static propTypes = {
    toggleModal: PropTypes.func,
    image: PropTypes.string,
    alt: PropTypes.string,
  };

  ref = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleToggle);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleToggle);
  }

  handleToggle = event => {
    event.preventDefault();
    const { target, keyCode } = event;
    const { current } = this.ref;
    const { toggleModal } = this.props;

    if (keyCode === 27 || target === current) toggleModal();
  };

  render() {
    const { image, alt } = this.props;
    const { overlay, modal } = styles;
    return (
      <div className={overlay} onClick={this.handleToggle} ref={this.ref}>
        <div className={modal}>
          <img src={image} alt={alt} />
        </div>
      </div>
    );
  }
}
export default Modal;
