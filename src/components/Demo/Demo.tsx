import React from 'react';
import './Demo.scss';

export const Demo = () => {
  return (
    <div className="demo">
      <div className="phone-container">
        <div className="logo">
          <span>SEU SUPER</span>
        </div>
        <div className="login">
          <div className="circle"></div>
          <div className="button">
            <span>ENTRAR</span>
          </div>
          <div className="welcome-text">
            <span>OLÁ, FULANO(A)</span>
          </div>
        </div>
        <div className="external-apps">
          <div className="external-app"></div>
          <div className="external-app"></div>
        </div>
        <div className="footer-apps">
          <div className="apps-label">APLICATIVOS</div>
          <div className="apps-list">
            <div className="footer-app">
              <div className="new-bullet">Novo</div>
            </div>
            <div className="footer-app"></div>
            <div className="footer-app"></div>
            <div className="footer-app"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
