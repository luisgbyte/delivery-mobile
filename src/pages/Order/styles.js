import styled from 'styled-components/native';
import {FlatList} from 'react-native';

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

export const FoodsContainer = styled.View`
    flex: 1;
`;

export const FoodList = styled(FlatList)`
    flex: 1;
    padding: 0 20px;
    margin-top: 10px;
`;

export const Food = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #f0f0f5;
    border-radius: 8px;
    margin-bottom: 16px;
`;

export const FoodImageContainer = styled.View`
    background: #ffb84d;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 16px;
    height: 100%;
`;

export const FoodContent = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
`;
export const FoodTitle = styled.Text`
    font-family: 'Poppins-Regular';
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    color: #3d3d4d;
`;

export const FoodPricing = styled.Text`
    font-family: 'Poppins-Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    margin-top: 8px;
    font-weight: 600;
    color: #39b100;
`;

///

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

export const TotalContainer = styled.View`
    padding: 0 24px;
    margin-top: 5px;
`;

export const Title = styled.Text`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #3d3d4d;
`;

export const PriceButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TotalPrice = styled.Text`
    font-family: 'Poppins';
    font-weight: 900;
    font-size: 24px;
    line-height: 28px;
    color: #39b100;
    margin-top: 8px;
`;

export const QuantityContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 135px;
    background: #f0f0f5;
    border-radius: 8px;
    padding: 10px 20px;
    /* border: 1px solid red; */
`;

export const AdittionalItemText = styled.Text`
    font-family: 'Poppins-Regular';
    /* font-weight: bold; */
    font-size: 20px;
    color: #6c6c80;
`;
