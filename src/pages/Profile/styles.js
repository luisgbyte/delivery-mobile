import styled from 'styled-components/native';

import Input from '~/components/Form/Input';
import Button from '~/components/Button';

export const Container = styled.View`
    flex: 1;
    padding: 0 30px;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    align-self: center;
    margin-top: 45px;
`;

export const Separator = styled.View`
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin: 10px 0 20px;
`;

export const ContentForm = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    align-self: stretch;
    margin-top: 25px;
`;

export const FormInput = styled(Input)`
    margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
    margin-top: 35px;
`;
