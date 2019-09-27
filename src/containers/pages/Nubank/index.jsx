import React from 'react';
import PropTypes from 'prop-types';

import {Images, Container, MenuPrincipal, MenuLogin} from '../../../components';

export default function Nubank() {
    return (
        <Container>
            <Images />
            <MenuPrincipal />
            <MenuLogin />
            
        </Container>
    );
}

Nubank.propTypes = {
    history: PropTypes.object.isRequired
};