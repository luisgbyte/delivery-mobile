import React, {useRef} from 'react';

import {Form} from '@unform/mobile';
import {Keyboard} from 'react-native';

import * as Yup from 'yup';

import {useDispatch, useSelector} from 'react-redux';

import Background from '~/components/Background';

import {updateProfileRequest} from '~/store/modules/user/actions';

import {
    Container,
    ContentForm,
    Title,
    Separator,
    FormInput,
    SubmitButton,
} from './styles';

const Profile = () => {
    const formRef = useRef(null);

    const dispatch = useDispatch();

    const profile = useSelector((state) => state.user.profile);

    async function handleSubmit(data, {reset}) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().min(
                    3,
                    'O nome deve ter pelo menos 3 caracteres',
                ),
                email: Yup.string()
                    .email('Adicione um email válido')
                    .min(3, 'O email precisa ter no mínimo 3 caracteres'),
                oldPassword: Yup.string().notRequired(),
                password: Yup.string().when(
                    'oldPassword',
                    (oldPassword, field) =>
                        oldPassword
                            ? field
                                  .min(
                                      6,
                                      'A nova senha deve ter no mínimo 6 caracteres',
                                  )
                                  .required('Informe sua nova senha')
                            : field,
                ),
                confirmPassword: Yup.string().when(
                    'password',
                    (password, field) =>
                        password
                            ? field
                                  .required('Confirme sua nova senha')
                                  .oneOf(
                                      [Yup.ref('password')],
                                      'As senhas devem corresponder',
                                  )
                            : field,
                ),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            // Validation passed
            dispatch(updateProfileRequest(data));

            reset();
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
                <Title>Atualizar Cadastro</Title>
                <ContentForm>
                    <Form
                        ref={formRef}
                        initialData={profile}
                        onSubmit={handleSubmit}>
                        <FormInput
                            name="name"
                            icon="person-outline"
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder="Digite seu nome"
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
                                formRef.current
                                    .getFieldRef('oldPassword')
                                    .focus()
                            }
                        />

                        <Separator />

                        <FormInput
                            name="oldPassword"
                            icon="lock-outline"
                            secureTextEntry
                            placeholder="Sua senha atual"
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                formRef.current.getFieldRef('password').focus()
                            }
                        />
                        <FormInput
                            name="password"
                            icon="lock-outline"
                            secureTextEntry
                            placeholder="Sua nova senha"
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                formRef.current
                                    .getFieldRef('confirmPassword')
                                    .focus()
                            }
                        />
                        <FormInput
                            name="confirmPassword"
                            icon="lock-outline"
                            secureTextEntry
                            placeholder="Confirmação de senha"
                            returnKeyType="send"
                            onSubmitEditing={handleSubmit}
                            onPress={() => Keyboard.dismiss()}
                        />

                        <SubmitButton
                            onPress={() => formRef.current.submitForm()}>
                            Atualizar
                        </SubmitButton>
                    </Form>
                </ContentForm>
            </Container>
        </Background>
    );
};

export default Profile;
