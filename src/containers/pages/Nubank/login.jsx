import React, {useState} from 'react';
import PropTypes from 'prop-types';


import logo from '../../../assets/images/logo_branco.svg';
import loginStyle from './login-style.css';
import { Button } from '../../../components';

export default function NubankLogin() {

    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="img-branco">
            <a href="/nubank/">
                <img  src={logo} width="80" />
            </a>

            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <h3>Faça seu login</h3>
                    <input 
                        placeholder="CPF"
                        value={cpf} 
                        onChange={(e)=> {
                            console.log(cpf, e.target.value);
                            setCpf(e.target.value);
                        }}
                    />

                    <input 
                        placeholder="Senha"
                        value={senha}
                        onChange={(e)=>{
                            setSenha(e.target.value)
                        }}
                    />

                    <Button 
                        disabled={cpf.length>2 ? 0: 1}
                        bgcolor={ cpf.length>2 ? '#fff':''}
                        colorH={cpf.length>2 ? '#81259D':'#c3c3c3'}
                        onClick={()=>{
                            console.log(111);
                        }}
                    >CONTINUAR</Button>
                </form>
            </div>
        </div>
    );
}

NubankLogin.propTypes = {
    history: PropTypes.object.isRequired
};