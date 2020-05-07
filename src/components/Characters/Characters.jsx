import React from 'react';
import PropTypes from 'prop-types';
import Character from '../Character';
import { LightDarkProvider } from '../../Hooks/Provider'
import styles from './Characters.css';
import styleDark from './Dark.css';
import styleLight from './Light.css';

const Characters = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li key={character._id}>
      <Character {...character} />
    </li>
  ));
  const theme = LightDarkProvider();
  const styles = theme === 'dark' ? styleLight : styleDark;

  return (
    <ul className={styles.Characters}>
      {characters}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number.isRequired,
    photoUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired
};

export default Characters;
