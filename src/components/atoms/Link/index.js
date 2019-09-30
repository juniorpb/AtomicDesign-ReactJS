import React from 'react';

import styled from 'styled-components';

const LinkType = (props) => {
    switch(props.type) {
        case 'button': return <button type="button" {...props} />
        case 'submit': return <button type="submit" {...props} />
        
        case 'a':
        case 'anchor':
        default: return <a {...props}>{props.children}</a>

    }
}

const StyledLink = styled(LinkType)`
    font-family: "Tahoma";
    background: ${({bgcolor}) => bgcolor};
    color: ${({color})=>color};
    border: none;
    padding: ${({padding}) => padding};
    transition: 0.5s;
    text-decoration: ${({textDecoration}) => textDecoration};

    :hover{
        color: #9c15ce;
        cursor: pointer;
        transition: 0.5s;
    }
`;

Link.defaultProps = {
    bgcolor: '#FFF',
    padding: '19px 12px',
    color: '#757575',
    textDecoration: 'none',
}

export default function Link(props) {

    return <StyledLink {...props} />
    
}
