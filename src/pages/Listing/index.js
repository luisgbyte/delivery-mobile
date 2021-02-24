import React, {useState, useEffect} from 'react';
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
    const [searchValue, setSearchValue] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productRequest());
    }, []);

    const filterProducts = ({product}) => {
        const {products} = product;

        if (searchValue !== '')
            return products.filter((item) => item.name.includes(searchValue));
        return products;
    };

    const products = useSelector(filterProducts);

    async function handleNavigate(id) {
        // Navigate do ProductDetails page
        navigation.navigate('ProductDetails', {
            id,
        });

        // Clearing the search field
        setSearchValue('');
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
                    value={searchValue}
                    onChangeText={setSearchValue}
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
