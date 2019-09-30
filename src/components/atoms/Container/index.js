import React from 'react';

import styled from 'styled-components';
import { ifProp } from 'styled-tools';

const StyledContainer = styled.div`
    font-family: "Gotham SSm A";
    padding: ${ifProp('padding', ({padding}) => padding, '0')};
    display: flex;
    align-items: center;

    align-self: ${({alignself}) => alignself};
    justify-content: ${({justify}) => justify};
    box-shadow: ${({shadow}) => shadow};
`;

export default function Container({children, ...props}) {

    return <StyledContainer {...props}> {children} </StyledContainer>
}

Container.defaultProps = {
    alignself: 'center',
    justify: 'space-between',
    shadow: 'none'
}