import React from 'react';
import { Container, Link} from '../../../components';

import {useSelector} from 'react-redux';

export default function MenuPrincipal() {
    const dados = useSelector(state => state.data);

    return (
        <Container>
            <Link href="/nubank/login" padding="30px 32px"> {dados} </Link>
            <Link 
                bgcolor="#9c15ce" 
                color="#FFF"
                padding="32px 32px"
                href="/nubank/join"
            > Quero ser Nubank </Link>
        </Container>
    )
}
