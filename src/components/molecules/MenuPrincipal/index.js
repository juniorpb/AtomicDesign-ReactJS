import React from 'react';
import { Link, Container} from '../../../components';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

export default function MenuPrincipal(props) {
    console.log("@menu", props.joinReducer)
    return (
        <Container padding="0px 16px;">
            <Link href="/nubank" color="#9c15ce"> Início </Link>
            <Link href="/nubank/conta"> NuConta </Link>
            <Link href="/nubank/credit"> Credi t Card </Link>
            <Link href="/nubank/rewards"> Rewards </Link>
            <Link href="/nubank/loans"> Loans </Link>
            <Link> About us </Link>
        </Container>
    )
}


const mapStateProps = state => {
    return {
        ...state
    }
};

const mapDispatchProps = dispatch =>
    bindActionCreators (
        {},
        dispatch
    );


connect(
    mapStateProps,
    mapDispatchProps
) (MenuPrincipal);