import React, {useState, useEffect} from 'react';
import {Image, Text, ActivityIndicator} from 'react-native';

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

const TOTAL_PER_PAGE = 6;

const Listing = ({navigation}) => {
    const [searchValue, setSearchValue] = useState('');
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productRequest(page));
        setPage(page + 1);
    }, []);

    const filterProducts = ({product}) => {
        const {products} = product;

        if (searchValue !== '')
            return products.filter((item) => item.name.includes(searchValue));
        return products;
    };

    const products = useSelector(filterProducts);
    const {count, loading} = useSelector((state) => state.product);

    console.tron.log(loading);

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

    async function flatListEnd() {
        // Finding the max of existing items to control pagination
        const max = Math.ceil(count / TOTAL_PER_PAGE);

        if (page <= max) {
            dispatch(productRequest(page));
            setPage(page + 1);
        }
    }

    return (
        <Container>
            <Header>
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
            <FoodsContainer>
                <Title>Produtos</Title>
                <FoodsContainer>
                    <FoodList
                        data={products}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({item}) => (
                            <Food
                                key={item.id}
                                onPress={() => handleNavigate(item.id)}
                                activeOpacity={0.6}
                                testID="null">
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
                                    <FoodTitle>{item.name}</FoodTitle>
                                    <FoodDescription>
                                        {item.description}
                                    </FoodDescription>
                                    <FoodPricing>
                                        {formatValue(item.price)}
                                    </FoodPricing>
                                </FoodContent>
                            </Food>
                        )}
                        onEndReached={() => flatListEnd()}
                        onEndReachedThreshold={0.7}
                        ListFooterComponent={() =>
                            loading ? (
                                <ActivityIndicator
                                    size="large"
                                    color="#c72820"
                                />
                            ) : null
                        }
                    />
                </FoodsContainer>
            </FoodsContainer>
        </Container>
    );
};

export default Listing;
