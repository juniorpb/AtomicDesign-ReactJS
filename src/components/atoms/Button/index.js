import React from 'react';

import styled from 'styled-components';
// import {ifProp} from 'styled-tools';

const StyledButton = styled.button`
    background: ${({bgcolor}) => bgcolor};
    color: ${({color})=>color};
    border: none;
    padding: ${({padding}) => padding};
    transition: 0.5s;

    margin: 0;

    :hover{
        color: #9c15ce;
        cursor: pointer;
        transition: 0.5s;
    }
`;

Button.defaultProps = {
    bgcolor: '#FFF',
    padding: '19px 12px',
    color: '#757575'
}

export default function Button({children, ...props}) {

    return (
        <StyledButton {...props}>{children}</StyledButton>
    )
}
