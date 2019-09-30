import React from 'react';
import { Link, Container} from '../../../components';

export default function MenuPrincipal() {
    return (
        <Container padding="0px 16px;">
            <Link href="/nubank" color="#9c15ce"> Início </Link>
            <Link href="/nubank/conta"> NuConta </Link>
            <Link href="/nubank/credit"> Credit Card </Link>
            <Link href="/nubank/rewards"> Rewards </Link>
            <Link href="/nubank/loans"> Loans </Link>
            <Link> About us </Link>
        </Container>
    )
}
