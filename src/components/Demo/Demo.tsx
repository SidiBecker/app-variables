import React, { useState } from 'react';
import { Home } from '../Home/Home';
import './Demo.scss';

export const Demo = () => {
  const [page, setPage] = useState(0);

  return (
    <div className="demo">
      <div className="demo-area">
        <div className="pages-select">
          <button
            className={page === 0 ? 'selected' : ''}
            onClick={() => setPage(0)}
          >
            Home
          </button>
          <button
            className={page === 1 ? 'selected' : ''}
            onClick={() => setPage(1)}
          >
            Login
          </button>
        </div>

        <div className="phone-container">
          {page === 0 && <Home />}
          {page === 1 && <div>TESTE</div>}
        </div>
      </div>
    </div>
  );
};
