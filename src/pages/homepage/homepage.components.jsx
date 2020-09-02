import React, { Fragment } from 'react';
import './homepage.styled.scss';
import Directory from '../../components/directory/directory.component';

const HomePage = () => {
  return (
    <Fragment>
      <div className="homepage">
        <Directory />
      </div>
    </Fragment>
  );
};

export default HomePage;