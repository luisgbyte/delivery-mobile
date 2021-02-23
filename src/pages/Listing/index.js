import React, {useEffect} from 'react';
import {Image, Text, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {useDispatch, useSelector} from 'react-redux';
import SearchInput from '~/components/SearchInput';

import formatValue from '~/utils/formatValue';

import {signOut} from '~/store/modules/auth/actions';
import {productRequest} from '~/store/modules/product/actions';

import {
    Container,
    Header,
    FilterContainer,
    Title,
    FoodsContainer,
    FoodList,
    Food,
    FoodImageContainer,
    FoodContent,
    FoodTitle,
    FoodDescription,
    FoodPricing,
} from './styles';

const Listing = ({navigation}) => {
    const dispatch = useDispatch();

    const {products} = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(productRequest());
    }, []);

    async function handleNavigate(id) {
        // Navigate do ProductDetails page
        navigation.navigate('ProductDetails', {
            id,
        });
    }

    function handleLogout() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Header>
                {/* <Image source={Logo} /> */}
                <Text
                    style={{fontSize: 40, color: 'white', fontWeight: 'bold'}}>
                    Delivery
                </Text>
                <Icon
                    name="logout"
                    size={26}
                    color="#FFB84D"
                    onPress={handleLogout}
                />
            </Header>
            <FilterContainer>
                <SearchInput
                    value={null}
                    onChangeText={null}
                    placeholder="Hey, o que você está procurando?"
                />
            </FilterContainer>
            <ScrollView>
                <FoodsContainer>
                    <Title>Produtos</Title>
                    <FoodList>
                        {!!products &&
                            products.map((product) => (
                                <Food
                                    key={product.id}
                                    onPress={() => handleNavigate(product.id)}
                                    activeOpacity={0.6}
                                    testID="null">
                                    <FoodImageContainer>
                                        <Image
                                            style={{
                                                width: 88,
                                                height: 88,
                                                borderRadius: 50,
                                            }}
                                            source={{uri: product.file.url}}
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
                            ))}
                    </FoodList>
                </FoodsContainer>
            </ScrollView>
        </Container>
    );
};

export default Listing;
