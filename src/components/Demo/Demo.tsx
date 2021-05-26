import React, { useState } from 'react';
import { AllPages, PagesEnum } from '../../Utils/PagesEnum';
import { Home } from '../Home/Home';
import { Login } from '../Login/Login';
import { PageSelect } from '../PageSelect/PageSelect';
import './Demo.scss';

export const Demo = () => {
  function onChangePage(page: any) {
    setPage(page);
  }

  const [page, setPage] = useState(PagesEnum.HOME);

  return (
    <div className="demo">
      <div className="demo-area">
        <PageSelect onChange={onChangePage} page={page} />
        <div className="phone-container">
          {page === PagesEnum.HOME && <Home />}
          {page === PagesEnum.LOGIN && <Login />}
        </div>
      </div>
    </div>
  );
};
