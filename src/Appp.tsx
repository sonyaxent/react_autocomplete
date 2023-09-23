import React from 'react';
import './App.scss';
import { peopleFromServer } from './data/people';
import ComboBox from './ComboBox/ComboBox';

export const Appp: React.FC = () => {
  return (
    <main className="section">
      <h1 className="title">
        {`${peopleFromServer[0].name} (${peopleFromServer[0].born} - ${peopleFromServer[0].died})`}
      </h1>
      <ComboBox />
    </main>
  );
};
