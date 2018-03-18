import React from 'react';
import ReactDOM from 'react-dom';
import Speaking from './Speaking';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Speaking />, div);
  ReactDOM.unmountComponentAtNode(div);
});