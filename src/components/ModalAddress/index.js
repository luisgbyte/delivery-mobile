import React, {useState, useRef} from 'react';
import {Form} from '@unform/mobile';

import {useSelector, useDispatch} from 'react-redux';
import * as Yup from 'yup';

import {Text, Button, View, Modal, StyleSheet} from 'react-native';

import {FormInput} from './styles';

import {addressUpdate, addressCreate} from '~/store/modules/address/actions';

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        marginTop: 50,
        backgroundColor: '#00000099',
    },
    modalView: {
        margin: 10,
        backgroundColor: '#D93030',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});

function ModalAddress({modalVisible, setModalVisible}) {
    const formRef = useRef(null);

    const [validationErrors, setValidationErrors] = useState([]);

    const {address} = useSelector((state) => state.address);

    const dispatch = useDispatch();

    // validation e submit
    async function handleSubmit(data) {
        try {
            // Remove all previous errors
            setValidationErrors();

            const schema = Yup.object().shape({
                street: Yup.string().required('A rua é obrigatória'),
                neighborhood: Yup.string().required('O bairro é obrigatório'),
                number: Yup.string().required('O número é obrigatório'),
                city: Yup.string().required('A cidade é obrigatória'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            // Validation passed
            if (address) {
                dispatch(addressUpdate(data));
            } else {
                dispatch(addressCreate(data));
            }

            setModalVisible(false);
        } catch (err) {
            const errors = [];

            if (err instanceof Yup.ValidationError) {
                err.inner.forEach((error) => {
                    errors.push(error.message);
                });

                setValidationErrors([...errors]);
            }
        }
    }

    return (
        <Modal
            animationType="fade"
            transparent
            visible={modalVisible}
            onRequestClose={() => {
                setValidationErrors();
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View
                        style={{
                            width: '100%',
                            justifyContent: 'flex-start',
                            paddingBottom: '5%',
                        }}>
                        {!!validationErrors &&
                            validationErrors.map((error, index, _) => (
                                <Text
                                    key={index.toString()}
                                    style={{color: 'black'}}>
                                    {error}
                                </Text>
                            ))}
                    </View>
                    <Form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        style={{maxWidth: '100%'}}
                        initialData={address}>
                        <FormInput
                            placeholder="Rua"
                            name="street"
                            returnKeyType="next"
                        />

                        <View
                            style={{
                                flexDirection: 'row',
                            }}>
                            <FormInput
                                style={{width: '65%'}}
                                placeholder="Bairro"
                                name="neighborhood"
                            />

                            <FormInput
                                style={{width: '30%', marginLeft: '5%'}}
                                keyboardType="numeric"
                                placeholder="Nº"
                                name="number"
                            />
                        </View>

                        <FormInput placeholder="Cidade" name="city" />

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                marginTop: 10,
                            }}>
                            <View style={{marginRight: '10%'}}>
                                <Button
                                    title="Cancelar"
                                    color="#B7B7A4"
                                    onPress={() => {
                                        setValidationErrors();
                                        setModalVisible(!modalVisible);
                                    }}
                                />
                            </View>

                            <Button
                                title="Enviar"
                                color="#118AB2"
                                onPress={() => formRef.current.submitForm()}
                            />
                        </View>
                    </Form>
                </View>
            </View>
        </Modal>
    );
}

export default ModalAddress;
