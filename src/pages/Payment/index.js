import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import RadioForm from 'react-native-simple-radio-button';

import {finishOrder} from '~/store/modules/cart/actions';

import {
    Container,
    Card,
    FinishOrderButton,
    ButtonText,
    IconContainer,
} from './styles';

const radio_props = [
    {label: 'Cartão de Crédito (Entregador)', value: 'cartão de crédito'},
    {label: 'Cartão de Débito (Entregador)', value: 'cartão de débito'},
    {label: 'Dinheiro', value: 'dinheiro'},
];

const Payment = () => {
    const [payment, setPayment] = useState('dinheiro');

    const dispatch = useDispatch();

    const {loading} = useSelector((state) => state.cart);

    return (
        <Container>
            <View>
                <Card>
                    <RadioForm
                        radio_props={radio_props}
                        initial={2}
                        buttonColor="#2196f3"
                        animation
                        labelStyle={{fontSize: 16, color: 'black'}}
                        buttonSize={18}
                        onPress={(value) => setPayment(value)}
                    />
                </Card>
            </View>
            {loading ? (
                <ActivityIndicator size="large" color="#c72820" />
            ) : null}
            <FinishOrderButton onPress={() => dispatch(finishOrder(payment))}>
                <ButtonText>Finalizar Pedido</ButtonText>
                <IconContainer>
                    <Icon name="check" size={24} color="#fff" />
                </IconContainer>
            </FinishOrderButton>
        </Container>
    );
};

export default Payment;
