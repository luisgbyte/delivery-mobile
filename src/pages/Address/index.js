import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ModalAddress from '~/components/ModalAddress';

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

import {addressRequest} from '~/store/modules/address/actions';

const Address = () => {
    const dispatch = useDispatch();

    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const {address, loading} = useSelector((state) => state.address);

    useEffect(() => {
        dispatch(addressRequest());
    }, []);

    return (
        <>
            <Container>
                {!loading ? (
                    <View>
                        <Head>
                            <Title>Endereço</Title>
                            <Edit onPress={() => setModalVisible(true)}>
                                {address ? 'Editar' : 'Novo Endereço'}
                            </Edit>
                        </Head>
                        {address && (
                            <Card>
                                <Field>{address.street}</Field>
                                <Field>{address.neighborhood}</Field>
                                <Field>Nº {address.number}</Field>
                                <Field>{address.city}</Field>
                            </Card>
                        )}
                    </View>
                ) : (
                    <ActivityIndicator size="large" color="#c72820" />
                )}
                {!!address && (
                    <FinishOrderButton
                        onPress={() => navigation.navigate('Payment')}>
                        <ButtonText>Finalizar Pedido</ButtonText>
                        <IconContainer>
                            <Icon name="check" size={24} color="#fff" />
                        </IconContainer>
                    </FinishOrderButton>
                )}
            </Container>
            <ModalAddress
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </>
    );
};

export default Address;
