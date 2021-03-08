import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 0 24px;
    margin-top: 5px;
`;

export const Button = styled.TouchableOpacity`
    background: #999999;

    border-radius: 8px;
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 16px;

    flex-direction: row;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    color: #fff;
    flex: 1;
    text-align: center;
`;
