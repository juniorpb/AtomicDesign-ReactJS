import React from 'react';
import PropTypes from 'prop-types';

import { Header, Container } from '../../../components'
export default function NubankLogin() {
    return (
        <div>

            <Header />
            <Container>LOGIN</Container>
        </div>
    );
}

NubankLogin.propTypes = {
    history: PropTypes.object.isRequired
};