import React from 'react';
import Toggle from '../components/Toggle';
import { useToggle, useDark } from '../Hooks/Provider';


const Header = () => {
  const toggle = useToggle();
  const dark = useDark();

  return (
    <header>
      <h1>
      The Characters of Avatar
      </h1>
      <Toggle value={dark === 'dark'} toggle={toggle}/>
    </header>
  );
};
export default Header;
