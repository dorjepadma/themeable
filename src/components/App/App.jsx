import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CharacterList from '../../containers/CharacterList';

export default function App() {
  return ( 
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={CharacterList} /> 
        </Switch>
      </Router>
    </>
  );
} 
