import React from 'react';
import PropTypes from 'prop-types';

import {Button, Images} from '../../../components';

export default function Nubank() {
    return(
        <div>
            <Images />
            <Button ativo = {true}> ENVIAR </Button>
        </div>
    );
}

Nubank.propTypes = {
    history: PropTypes.object.isRequired
};