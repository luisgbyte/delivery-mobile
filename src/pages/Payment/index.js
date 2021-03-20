import React from 'react';
import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import {
    Container,
    Card,
    FinishOrderButton,
    ButtonText,
    IconContainer,
} from './styles';

const Payment = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <View>
                <Card>
                    <Text>Cartão crédito (Entregador)</Text>
                </Card>
                <Card>
                    <Text>Cartão débito (Entregador)</Text>
                </Card>
                <Card>
                    <Text>Dinheiro</Text>
                </Card>
            </View>
            <FinishOrderButton onPress={() => navigation.navigate('Payment')}>
                <ButtonText>Finalizar Pedido</ButtonText>
                <IconContainer>
                    <Icon name="check" size={24} color="#fff" />
                </IconContainer>
            </FinishOrderButton>
        </Container>
    );
};

export default Payment;
