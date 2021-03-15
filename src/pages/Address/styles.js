import styled from 'styled-components/native';
import Input from '~/components/Input';

export const Container = styled.View`
    padding: 0 20px;
    margin-top: 16px;
    display: flex;
    flex: 1;
    justify-content: space-between;
`;

export const Card = styled.View`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #e0e0e0;
    border-radius: 8px;
`;

export const Field = styled.Text`
    font-family: 'Poppins-Regular';
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    color: #3d3d4d;
`;

export const Head = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const Title = styled.Text`
    font-family: 'Poppins-Regular';
    font-size: 20px;
    font-weight: bold;
    color: #3d3d4d;
`;

export const Edit = styled.Text`
    font-family: 'Poppins-Regular';
    font-size: 16px;
    font-weight: bold;
    color: #c72828;
`;

export const FinishOrderButton = styled.TouchableOpacity`
    background: #39b100;
    border-radius: 8px;
    margin-bottom: 30px;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`;

export const ButtonText = styled.Text`
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    color: #fff;
    flex: 1;
    text-align: center;
`;

export const IconContainer = styled.View`
    background-color: #41c900;
    padding: 16px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
`;

export const FormInput = styled(Input)`
    margin-bottom: 15px;
`;
