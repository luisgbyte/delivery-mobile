import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Container,
    Card,
    Field,
    Head,
    Title,
    Edit,
    FinishOrderButton,
    ButtonText,
    IconContainer,
} from './styles';

const Address = () => (
    <Container>
        <View>
            <Head>
                <Title>Endereço</Title>
                <Edit>Editar</Edit>
            </Head>
            <Card>
                <Field>Rua dos Alfeneiros</Field>
                <Field>Little Whinging</Field>
                <Field>N° 4</Field>
                <Field>Surrey</Field>
            </Card>
        </View>

        <FinishOrderButton onPress={() => {}}>
            <ButtonText>Finalizar Pedido</ButtonText>
            <IconContainer>
                <Icon name="check" size={24} color="#fff" />
            </IconContainer>
        </FinishOrderButton>
    </Container>
);

export default Address;
