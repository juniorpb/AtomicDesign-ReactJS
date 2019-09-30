import React from 'react';
import { Button, Container } from '../../../components';

export default function MenuPrincipal() {
    return (
        <Container>
            <Button padding="30px 32px"> Login </Button>
            <Button 
                bgcolor="#9c15ce" 
                color="#FFF"
                padding="30px 32px"
            > Quero ser Nubank </Button>
        </Container>
    )
}
