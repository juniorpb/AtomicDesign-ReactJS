import React from 'react';

import { Container, MenuLogin, Menu } from '../../../components';

export default function Header() {
    return (
        <Container
            padding="0 0 0 32px"
            shadow="rgba(0, 0, 0, 0.15) 0 1px 2px" 
        >
            <Menu />
            <MenuLogin />
        </Container>
    )
}
