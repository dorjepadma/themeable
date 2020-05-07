import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('creates the character', () => {
  it('builds the Character', () => {
    const wrapper = shallow (<Character
      name='Aang'
      photoUrl='https://vignette.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003' />);
    expect(wrapper).toMatchSnapshot();
  });
});

