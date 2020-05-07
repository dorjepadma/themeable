import React from 'react';
import CharacterList from '../../containers/CharacterList';
import Header from '../../components/Header'
import { LightDarkProvider } from '../../Hooks/Provider'

export default function App() {
  return ( 
    <>
      <LightDarkProvider>
        <Header/>
        <CharacterList/> 
      </LightDarkProvider>
    </>
  );
} 
