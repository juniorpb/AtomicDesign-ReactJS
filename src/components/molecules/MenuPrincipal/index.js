import React from 'react';
import { Button, Container} from '../../../components';

export default function MenuPrincipal() {
    return (
        <Container>
            <Button actived> Início </Button>
            <Button> NuConta </Button>
            <Button> Credit Card </Button>
            <Button> Rewards </Button>
            <Button> Loans </Button>
            <Button> About us </Button>
        </Container>
    )
}
