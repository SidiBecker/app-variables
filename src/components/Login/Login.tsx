import React from 'react';
import {
  FaArrowLeft,
  FaCreditCard,
  FaExclamationCircle,
  FaEye,
  FaLock,
} from 'react-icons/fa';
import Toggle from 'react-toggle';
import './Login.scss';

export const Login = () => {
  return (
    <>
      <div className="header">
        <div className="back-button">
          <FaArrowLeft />
        </div>
        <div className="title">AUTENTICAÇÃO</div>
      </div>
      <div className="logo">
        <span>LOGOTIPO</span>
      </div>
      <div className="fields">
        <div className="field">
          <div className="icon-placeholder">
            <div className="field-icon">
              <FaCreditCard />
            </div>
            <span className="label">CPF/CNPJ</span>
          </div>
          <div className="field-buttons">
            <FaExclamationCircle size={17} color={'var(--warning)'} />
          </div>
        </div>
        <div className="field">
          <div className="icon-placeholder">
            <div className="field-icon">
              <FaLock />
            </div>
            <span className="label">SENHA</span>
          </div>

          <div className="field-buttons">
            <FaEye size={17} color={'var(--outline-color)'} />
          </div>
        </div>

        <div className="remember-area">
          <div className="remember">
            <span>Lembrar</span>
            <Toggle checked={true} onChange={() => {}} />
          </div>

          <div className="recovery">
            <span>Esqueceu sua senha?</span>
          </div>
        </div>
      </div>
      <div className="buttons">
        <div className="login-button">
          <button>ENTRAR</button>
        </div>
        <div className="divider">ou</div>
        <div className="signup-button">
          <button>CADASTRAR</button>
        </div>
      </div>
    </>
  );
};
