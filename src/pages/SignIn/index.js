import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Form} from '@unform/mobile';
import {Logo} from '~/components/Svg';

import Background from '~/components/Background';
import {signInRequest} from '~/store/modules/auth/actions';

// import Input from '~/components/Form/Input';

import {
    Container,
    // Form,
    FormInput,
    SubmitButton,
    SignLink,
    SignLinkText,
} from './styles';

const SignIn = ({navigation}) => {
    const dispath = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {loading} = useSelector((state) => state.auth);

    function handleSubmit() {
        console.tron.log('test5');
        dispath(signInRequest(email, password));
    }
    const formRef = useRef(null);

    return (
        <Background>
            <Container>
                <Logo height="150px" width="150px" />
                <Form ref={formRef}>
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
                        value={email}
                        onChangeText={setEmail}
                    />

                    <FormInput
                        name="password"
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Sua senha secreta"
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <SubmitButton loading={loading} onPress={handleSubmit}>
                        Acessar
                    </SubmitButton>
                </Form>

                <SignLink onPress={() => navigation.navigate('SignUp')}>
                    <SignLinkText>Criar conta gratuita</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
};

export default SignIn;
