import React, {useState} from 'react';
// import {useSelector, dispatch, useDispatch} from 'react-redux';
// import {Text} from 'react-native';

import {Container, Header, HeaderTitle} from './styles';

const Orders = () => {
    // const dispatch = useDispatch();

    useState(() => {}, []);

    return (
        <Container>
            <Header>
                <HeaderTitle>Pedidos</HeaderTitle>
            </Header>
        </Container>
    );
};

export default Orders;
