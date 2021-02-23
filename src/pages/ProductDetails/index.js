import React, {useState, useMemo} from 'react';
import {useSelector} from 'react-redux';

import {Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {useRoute} from '@react-navigation/native';
import formatValue from '../../utils/formatValue';

import {
    Container,
    Header,
    ScrollContainer,
    FoodsContainer,
    Food,
    FoodImageContainer,
    FoodContent,
    FoodTitle,
    FoodDescription,
    FoodPricing,
    Title,
    TotalContainer,
    AdittionalItemText,
    PriceButtonContainer,
    TotalPrice,
    QuantityContainer,
    FinishOrderButton,
    ButtonText,
    IconContainer,
} from './styles';

const ProductDetails = () => {
    const [foodQuantity, setFoodQuantity] = useState(1);
    // const navigation = useNavigation();

    const route = useRoute();

    const {id} = route.params;

    const selectUniqueProduct = ({product}) => {
        const {products} = product;
        return products.filter((item) => item.id === id)[0];
    };

    const product = useSelector(selectUniqueProduct);

    function handleIncrementFood() {
        // Increment food quantity
        setFoodQuantity(foodQuantity + 1);
    }

    function handleDecrementFood() {
        // Decrement food quantity
        if (foodQuantity === 1) return;
        setFoodQuantity(foodQuantity - 1);
    }

    const cartTotal = useMemo(
        () =>
            // Calculate cartTotal
            formatValue(product.price * foodQuantity),
        [product, foodQuantity],
    );

    async function handleFinishOrder() {
        // Finish the order and save on the API
    }

    return (
        <Container>
            <Header />

            <ScrollContainer>
                <FoodsContainer>
                    <Food>
                        <FoodImageContainer>
                            <Image
                                className="test"
                                style={{
                                    width: 290,
                                    height: 220,
                                }}
                                resizeMode="cover"
                                source={{
                                    uri: product.file.url,
                                }}
                            />
                        </FoodImageContainer>
                        <FoodContent>
                            <FoodTitle>{product.name}</FoodTitle>
                            <FoodDescription>
                                {product.description}
                            </FoodDescription>
                            <FoodPricing>
                                {formatValue(product.price)}
                            </FoodPricing>
                        </FoodContent>
                    </Food>
                </FoodsContainer>
                <TotalContainer>
                    <Title>Total do pedido</Title>
                    <PriceButtonContainer>
                        <TotalPrice testID="cart-total">{cartTotal}</TotalPrice>
                        <QuantityContainer>
                            <Icon
                                size={30}
                                color="#6C6C80"
                                name="remove"
                                onPress={handleDecrementFood}
                                testID="decrement-food"
                            />
                            <AdittionalItemText
                                testID="food-quantity"
                                style={{fontSize: 18}}>
                                {foodQuantity}
                            </AdittionalItemText>
                            <Icon
                                size={30}
                                color="#6C6C80"
                                name="add"
                                onPress={handleIncrementFood}
                                testID="increment-food"
                            />
                        </QuantityContainer>
                    </PriceButtonContainer>

                    <FinishOrderButton onPress={() => handleFinishOrder()}>
                        <ButtonText>Adicionar ao carrinho</ButtonText>
                        <IconContainer>
                            <Icon name="check" size={24} color="#fff" />
                        </IconContainer>
                    </FinishOrderButton>
                </TotalContainer>
            </ScrollContainer>
        </Container>
    );
};

export default ProductDetails;
