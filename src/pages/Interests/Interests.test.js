import React from 'react';
import ReactDOM from 'react-dom';
import Interests from './Interests';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Interests />, div);
  ReactDOM.unmountComponentAtNode(div);
});
