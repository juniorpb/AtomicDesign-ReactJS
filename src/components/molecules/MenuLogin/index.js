import React from 'react';
import { Button, Container, Link} from '../../../components';

export default function MenuPrincipal() {
    return (
        <Container>
            <Link href="/nubank/login" padding="30px 32px"> Login </Link>
            <Button 
                bgcolor="#9c15ce" 
                color="#FFF"
                padding="30px 32px"
            > Quero ser Nubank </Button>
        </Container>
    )
}
