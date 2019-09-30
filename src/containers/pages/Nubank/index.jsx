import React from 'react';
import PropTypes from 'prop-types';

import {Header} from '../../../components'
export default function Nubank() {
    return (
        <Header/>
    );
}

Nubank.propTypes = {
    history: PropTypes.object.isRequired
};