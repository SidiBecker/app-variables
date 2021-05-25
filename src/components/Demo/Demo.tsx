import React from 'react';
import './Demo.scss';
import {
  FaUserFriends,
  FaBullhorn,
  FaPlusCircle,
  FaGift,
  FaCheckCircle,
  FaSearch,
  FaCreditCard,
} from 'react-icons/fa';

export const Demo = () => {
  return (
    <div className="demo">
      <div className="phone-container">
        <div className="logo">
          <span>LOGOTIPO</span>
        </div>
        <div className="login">
          <div className="circle">
            <FaUserFriends size={60} color={`var(--outline-color-button)`} />
          </div>
          <div className="button">
            <span>ENTRAR</span>
          </div>
          <div className="welcome-text">
            <span>OLÁ, FULANO(A)</span>
          </div>
        </div>
        <div className="external-apps">
          <div className="external-app">
            <div className="external-app-container">
              <FaBullhorn size={40} color={`var(--outline-color-button)`} />
              <span>ENCARTE</span>
            </div>
          </div>
          <div className="external-app">
            <div className="external-app-container">
              <FaPlusCircle size={40} color={`var(--outline-color-button)`} />
              <span>CONTAS</span>
            </div>
          </div>
        </div>
        <div className="footer-apps">
          <div className="apps-label">APLICATIVOS</div>
          <div className="apps-list">
            <div className="footer-app">
              <span className="new-bullet">Novo</span>
              <div className="footer-app-container">
                <FaGift size={30} color={`var(--outline-color)`} />
                <span>SORTEIOS</span>
              </div>
            </div>
            <div className="footer-app">
              <div className="footer-app-container">
                <FaCheckCircle size={30} color={`var(--outline-color)`} />
                <span>PROMOÇÕES</span>
              </div>
            </div>
            <div className="footer-app">
              <div className="footer-app-container">
                <FaSearch size={30} color={`var(--outline-color)`} />
                <span>PREÇO</span>
              </div>
            </div>
            <div className="footer-app">
              <div className="footer-app-container">
                <FaCreditCard size={30} color={`var(--outline-color)`} />
                <span>FIDELIDADE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
