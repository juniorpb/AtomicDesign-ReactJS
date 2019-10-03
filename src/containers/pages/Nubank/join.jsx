import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {useDispatch} from 'react-redux';

import loginStyle from './login-style.css';
import { Button, Header } from '../../../components';


export default function NubankJoin() {

    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
    }

    function enter () {
        dispatch({type: 'ADD_DADOS', name: cpf})
    }

    return (
        <div className="img-branco">
        
            <Header />
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <h3>Junte-se ao Nubank</h3>
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
                        onClick={enter}
                    >CONTINUAR</Button>
                </form>
            </div>
        </div>
    );
}

NubankJoin.propTypes = {
    history: PropTypes.object.isRequired
};