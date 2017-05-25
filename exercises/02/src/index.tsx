import * as React from 'react';
import Component from './component';
import { render } from 'react-dom';

// Edit component.jsx to solve the assignment

render(
  <Component firstName="Yaakov" lastName="Ellis" showCorrect={true} />,
  document.querySelector('#app')
);
