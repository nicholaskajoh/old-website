import React from 'react';
import ReactDOM from 'react-dom';
import TalksAndWorkshops from './TalksAndWorkshops';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TalksAndWorkshops />, div);
  ReactDOM.unmountComponentAtNode(div);
});