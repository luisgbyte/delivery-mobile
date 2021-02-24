import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #fff;
`;

export const Header = styled.View`
    padding: 40px 24px 20px;
    background: #c72828;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ScrollContainer = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingBottom: 40,
    },
})`
    margin-top: -50px;
`;

export const FoodsContainer = styled.View`
    padding: 0 24px;
    display: flex;
    align-items: center;
`;

export const Food = styled.View`
    display: flex;
    flex-direction: column;
    background: #f0f0f5;
    border-radius: 8px;
    margin-bottom: 16px;
    width: 290px;
    height: 340px;
`;

export const FoodImageContainer = styled.View`
    background: #ffb84d;
    overflow: hidden;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
`;

export const FoodContent = styled.View`
    padding: 24px;
`;

export const FoodTitle = styled.Text`
    font-family: 'Poppins-Regular';
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: #3d3d4d;
`;

export const FoodDescription = styled.Text`
    font-family: 'Poppins-Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 15px;
    margin-top: 8px;
    color: #3d3d4d;
`;

export const FoodPricing = styled.Text`
    font-family: 'Poppins-Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #6c6c80;
    margin-top: 8px;
    font-weight: 600;
`;

export const Title = styled.Text`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #3d3d4d;
`;

export const AdditionalsContainer = styled.View`
    padding: 0 24px;
    margin-top: 16px;
`;

export const AdittionalItem = styled.View`
    background: #f0f0f5;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 15px;
    margin-top: 8px;
`;

export const AdittionalItemText = styled.Text`
    font-family: 'Poppins-Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    color: #6c6c80;
`;

export const AdittionalQuantity = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 105px;
`;

export const TotalContainer = styled.View`
    padding: 0 24px;
    margin-top: 20px;
`;

export const PriceButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TotalPrice = styled.Text`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #39b100;
    margin-top: 16px;
`;

export const QuantityContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 150px;
    background: #f0f0f5;
    border-radius: 8px;
    padding: 10px 15px;
    margin-top: 25px;
`;

export const FinishOrderButton = styled.TouchableOpacity`
    background: #999999;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    margin-top: 26px;
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
    background-color: #a3a3a3;
    padding: 16px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
`;
