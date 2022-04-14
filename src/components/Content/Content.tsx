import React from 'react';
import { Demo } from '../Demo/Demo';
import { Fotter } from '../Footer/Fotter';
import { Settings } from '../Settings/Settings';
import './Content.scss';

export const Content = () => {
  return (
    <div className="container">
      <Demo />
      <Settings />
    </div>
  );
};
