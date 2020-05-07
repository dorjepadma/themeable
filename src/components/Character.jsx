import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ photoUrl, name, }) => (
  <section className={styles.Character}>
    <img src={photoUrl} 
      alt={name} />
    <h2>{name}</h2>
  </section>
);

Character.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default Character;

