import React, {useEffect, useState} from 'react';
import {Image, Text, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import Logo from '~/components/Logo';

import SearchInput from '~/components/SearchInput';

import api from '~/services/api';
import formatValue from '~/utils/formatValue';

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
    const [products, setProducts] = useState(null);

    useEffect(() => {
        async function loadFoods() {
            const response = await api.get('products');

            setProducts(response.data.rows);
        }

        loadFoods();
    }, []);

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
                    size={24}
                    color="#FFB84D"
                    onPress={() => navigation.navigate('Home')}
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
                                    onPress={() => {}}
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
