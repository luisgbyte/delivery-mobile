import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

import {Alert, View, Text, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Container,
    Header,
    HeaderTitle,
    Content,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    OrderTotal,
    OrderStatus,
    RemoveOrder,
    TitleEmpty,
} from './styles';

import {NoOrders} from '~/components/Svg';

import {orderRequest} from '~/store/modules/order/actions';

const Orders = () => {
    const dispatch = useDispatch();

    useFocusEffect(
        React.useCallback(() => {
            dispatch(orderRequest());
        }, []),
    );

    const {loading, orders} = useSelector((state) => state.order);

    return (
        <Container>
            <Header>
                <HeaderTitle>Pedidos</HeaderTitle>
            </Header>
            {loading ? (
                <ActivityIndicator size="large" color="#c72820" />
            ) : (
                <Content>
                    {orders.length > 0 ? (
                        orders.map((order) => (
                            <Card key={order.id}>
                                <RemoveOrder>
                                    <Icon
                                        name="clear"
                                        size={26}
                                        color="#606c38"
                                        onPress={() =>
                                            Alert.alert('Cancelar pedido?')
                                        }
                                    />
                                </RemoveOrder>
                                <CardHeader>
                                    <CardTitle>Pedido {order.id}</CardTitle>
                                    <Text style={{fontSize: 16}}>
                                        <OrderStatus>
                                            {order.status}
                                        </OrderStatus>
                                    </Text>
                                </CardHeader>
                                <CardBody>
                                    {!!order.product &&
                                        order.product.map((item) => (
                                            <Text key={item.id}>
                                                {item.product_orders.quantity} x{' '}
                                                {item.name}
                                            </Text>
                                        ))}
                                </CardBody>
                                <CardFooter>
                                    <Text style={{fontSize: 18}}>
                                        Total:{' '}
                                        <OrderTotal>
                                            R$ {order.total}
                                        </OrderTotal>
                                    </Text>
                                </CardFooter>
                            </Card>
                        ))
                    ) : (
                        <View
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: 60,
                            }}>
                            <NoOrders height="190px" width="300px" />
                            <TitleEmpty>
                                Nenhum pedido encontrado, adicione produtos ao
                                carrinho e faça sua compra :)
                            </TitleEmpty>
                        </View>
                    )}
                </Content>
            )}
        </Container>
    );
};

export default Orders;
