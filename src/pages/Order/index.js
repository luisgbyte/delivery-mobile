import React, {useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useNavigation} from '@react-navigation/native';
import formatValue from '../../utils/formatValue';

import {
    Container,
    Header,
    HeaderTitle,
    FoodsContainer,
    FoodList,
    Food,
    FoodImageContainer,
    FoodContent,
    FoodTitle,
    FoodPricing,
    FinishOrderButton,
    ButtonText,
    IconContainer,
    TotalContainer,
    Title,
    PriceButtonContainer,
    TotalPrice,
    QuantityContainer,
    AdittionalItemText,
    EmptyCart,
    TitleEmpty,
} from './styles';

import {
    incrementQuantityProduct,
    decrementQuantityProduct,
} from '~/store/modules/cart/actions';

import ButtonLayout from '~/components/ButtonLayout';

import {Cart} from '~/components/Svg';

const Order = () => {
    const orders = useSelector((state) => state.cart.products);

    const navigation = useNavigation();

    const dispatch = useDispatch();

    function handleIncrementFood(index) {
        dispatch(incrementQuantityProduct(index));
    }

    function handleDecrementFood(index) {
        dispatch(decrementQuantityProduct(index));
    }

    const cartTotal = useMemo(() => {
        function getTotal(total, item) {
            return total + item.price * item.quantity;
        }

        const total = orders.reduce(getTotal, 0);

        return formatValue(total);
    }, [handleDecrementFood, handleIncrementFood]);

    const handleFinishOrder = () => navigation.navigate('Address');

    return (
        <Container>
            <Header>
                <HeaderTitle>Carrinho</HeaderTitle>
            </Header>
            <FoodsContainer>
                <FoodList
                    data={orders}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({index, item}) => (
                        <Food key={item.id} activeOpacity={0.6}>
                            <FoodImageContainer>
                                <Image
                                    style={{
                                        width: 88,
                                        height: 88,
                                        borderRadius: 50,
                                    }}
                                    source={{uri: item.file.url}}
                                />
                            </FoodImageContainer>
                            <FoodContent>
                                <View>
                                    <FoodTitle>{item.name}</FoodTitle>
                                    <FoodPricing>
                                        {formatValue(item.price)}
                                    </FoodPricing>
                                </View>
                                <View>
                                    <QuantityContainer>
                                        <Icon
                                            size={35}
                                            color="#6C6C80"
                                            name="remove"
                                            onPress={() =>
                                                handleDecrementFood(index)
                                            }
                                            testID="decrement-food"
                                        />
                                        <AdittionalItemText testID="food-quantity">
                                            {item.quantity}
                                        </AdittionalItemText>
                                        <Icon
                                            size={35}
                                            color="#6C6C80"
                                            name="add"
                                            onPress={() =>
                                                handleIncrementFood(index)
                                            }
                                            testID="increment-food"
                                        />
                                    </QuantityContainer>
                                </View>
                            </FoodContent>
                        </Food>
                    )}
                />
            </FoodsContainer>
            {orders.length > 0 ? (
                <TotalContainer>
                    <Title>Total do pedido</Title>
                    <PriceButtonContainer>
                        <TotalPrice testID="cart-total">{cartTotal}</TotalPrice>
                    </PriceButtonContainer>

                    <FinishOrderButton onPress={() => handleFinishOrder()}>
                        <ButtonText>Finalizar Pedido</ButtonText>
                        <IconContainer>
                            <Icon name="check" size={24} color="#fff" />
                        </IconContainer>
                    </FinishOrderButton>
                </TotalContainer>
            ) : (
                <EmptyCart>
                    <View
                        style={{
                            alignItems: 'center',
                        }}>
                        <Cart height="160px" width="335px" />
                        <TitleEmpty>Nenhum produto selecionado</TitleEmpty>
                    </View>

                    <ButtonLayout
                        onPress={() => navigation.navigate('Listagem')}>
                        Novo Pedido
                    </ButtonLayout>
                </EmptyCart>
            )}
        </Container>
    );
};

export default Order;
