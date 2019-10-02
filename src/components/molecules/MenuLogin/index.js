import React from 'react';
import { Button, Container, Link} from '../../../components';

import {useSelector} from 'react-redux';

export default function MenuPrincipal() {
    const dados = useSelector(state => state.data);

    return (
        <Container>
            <Link href="/nubank/login" padding="30px 32px"> {dados} </Link>
            <Button 
                bgcolor="#9c15ce" 
                color="#FFF"
                padding="32px 32px"
            > Quero ser Nubank </Button>
        </Container>
    )
}
