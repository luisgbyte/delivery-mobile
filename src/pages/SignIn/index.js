import React from 'react';

import Logo from '~/components/Logo';

import Background from '~/components/Background';

import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SignLink,
    SignLinkText,
} from './styles';

const SignIn = () => (
    <Background>
        <Container>
            <Logo height="150px" width="150px" />
            <Form>
                <FormInput
                    icon="mail-outline"
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Digite seu e-mail"
                />

                <FormInput
                    icon="lock-outline"
                    secureTextEntry
                    placeholder="Sua senha secreta"
                />

                <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
            </Form>

            <SignLink onPress={() => {}}>
                <SignLinkText>Criar conta gratuita</SignLinkText>
            </SignLink>
        </Container>
    </Background>
);

export default SignIn;
