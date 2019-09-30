import React from 'react';

import styled from 'styled-components';
import {ifProp} from 'styled-tools';

const StyledButton = styled.button`
    background: ${({bgcolor}) => bgcolor};
    color: ${ifProp('actived', 'rgb(186, 77, 227)', '#757575')};
    border: none;
    padding: 19px 32;
    transition: 0.5s;
    :hover{
        color: rgb(186, 77, 227);
        cursor: pointer;
        transition: 0.5s;
    }
`;

Button.defaultProps = {
    bgcolor: '#FFF'
}

export default function Button({children, ...props}) {

    return (
        <StyledButton {...props}>{children}</StyledButton>
    )
}
