import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

test('render app component', () => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(<App />, div);
});
