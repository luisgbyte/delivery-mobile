import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Form} from '@unform/mobile';
import {Keyboard} from 'react-native';

import * as Yup from 'yup';
import {Logo} from '~/components/Svg';

import Background from '~/components/Background';
import {signInRequest} from '~/store/modules/auth/actions';

import {
    Container,
    ContentForm,
    FormInput,
    SubmitButton,
    SignLink,
    SignLinkText,
} from './styles';

const SignIn = ({navigation}) => {
    const dispath = useDispatch();

    const {loading} = useSelector((state) => state.auth);

    const formRef = useRef(null);

    async function handleSubmit(data) {
        try {
            // Remove all previous errors
            formRef.current.setErrors({});

            const schema = Yup.object().shape({
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
            dispath(signInRequest(data));
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
                            Acessar
                        </SubmitButton>
                    </Form>
                </ContentForm>
                <SignLink
                    onPress={() => {
                        navigation.navigate('SignUp');
                    }}>
                    <SignLinkText>Criar conta gratuita</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
};

export default SignIn;
