import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../../assets/images/logo_branco.svg';
import { Header, Container, Link } from '../../../components';
import loginStyle from './login-style.css';

export default function NubankLogin() {
    return (
        <div className="img-branco">
            <a href="/nubank/">
                <img  src={logo} width="80" />
            </a>
            {/* <Header /> */}
            <div className="login-container">
                <form>
                    <h3>Faça seu login</h3>
                    <input placeholder="CPF" name="" />
                    <input placeholder="Senha" name="" />
                    <button type="submit">CONTINUAR</button>
                </form>
            </div>
        </div>
    );
}

NubankLogin.propTypes = {
    history: PropTypes.object.isRequired
};