import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #fff;
`;

export const Header = styled.View`
    padding: 40px 24px 20px;
    background: #c72828;
    display: flex;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    color: #fff;
    font-family: 'Poppins-Regular';
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
`;

export const Card = styled.View`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #e0e0e0;
    border-radius: 8px;
    margin-bottom: 20px;
`;

export const RemoveOrder = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    margin-top: -20px;
    padding: 2px;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const CardBody = styled.View`
    margin-top: 2px;
    flex-direction: column;
`;

export const CardTitle = styled.Text`
    font-family: 'Poppins-Regular';
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 22px;
    color: #3d3d4d;
`;

export const OrderTotal = styled.Text`
    font-size: 20px;
    line-height: 28px;
    font-weight: bold;
    color: #39b100;
    margin-top: 4px;
`;

export const OrderStatus = styled.Text`
    font-family: 'Poppins-Regular';
    font-weight: bold;
    font-size: 18px;
    color: #c72820;
`;

export const CardFooter = styled.View`
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Content = styled.ScrollView`
    padding: 0 20px;
    margin-top: 16px;
    display: flex;
    flex: 1;
`;

export const TitleEmpty = styled.Text`
    margin-top: 20px;
    font-family: 'Poppins-Regular';
    font-size: 18px;
    color: gray;
    text-align: center;
`;
