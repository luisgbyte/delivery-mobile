import React, {useRef} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {Form} from '@unform/mobile';
import {Keyboard} from 'react-native';

import * as Yup from 'yup';
import {Logo} from '~/components/Svg';

import Background from '~/components/Background';
import {signUpRequest} from '~/store/modules/auth/actions';

import {
    Container,
    ContentForm,
    FormInput,
    SubmitButton,
    SignLink,
    SignLinkText,
} from './styles';

const SignUp = ({navigation}) => {
    const dispatch = useDispatch();

    const {loading} = useSelector((state) => state.auth);

    const formRef = useRef(null);

    async function handleSubmit(data) {
        try {
            // Remove all previous errors
            formRef.current.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string()
                    .min(3, 'O nome precisa ter no mínimo 3 caracteres')
                    .required('O nome é obrigatório'),
                email: Yup.string()
                    .email('Adicione um campo de email válido')
                    .required('O email é obrigatório'),
                password: Yup.string()
                    .min(6, 'A senha precisa ter no mínimo 6 caracteres')
                    .required('A senha é obrigatória'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            // Validation passed
            dispatch(signUpRequest(data));
        } catch (err) {
            const validationErrors = {};

            if (err instanceof Yup.ValidationError) {
                err.inner.forEach((error) => {
                    validationErrors[error.path] = error.message;
                });

                formRef.current.setErrors(validationErrors);
            }
        }
    }

    return (
        <Background>
            <Container>
                <Logo height="150px" width="150px" />
                <ContentForm>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <FormInput
                            name="name"
                            icon="person-outline"
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder="Nome completo"
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                formRef.current.getFieldRef('email').focus()
                            }
                        />

                        <FormInput
                            name="email"
                            icon="mail-outline"
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder="Digite seu e-mail"
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                formRef.current.getFieldRef('password').focus()
                            }
                        />

                        <FormInput
                            name="password"
                            icon="lock-outline"
                            secureTextEntry
                            placeholder="Sua senha secreta"
                            returnKeyType="send"
                            onSubmitEditing={handleSubmit}
                            onPress={() => Keyboard.dismiss()}
                        />

                        <SubmitButton
                            loading={loading}
                            onPress={() => formRef.current.submitForm()}>
                            Cadastrar
                        </SubmitButton>
                    </Form>
                </ContentForm>
                <SignLink onPress={() => navigation.navigate('SignIn')}>
                    <SignLinkText>Já tenho conta</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
};

export default SignUp;
