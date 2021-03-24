import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

import {Alert, Text} from 'react-native';
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
} from './styles';

import {orderRequest} from '~/store/modules/order/actions';

const Orders = () => {
    const dispatch = useDispatch();

    useFocusEffect(
        React.useCallback(() => {
            dispatch(orderRequest());
        }, []),
    );

    const {orders} = useSelector((state) => state.order);

    return (
        <Container>
            <Header>
                <HeaderTitle>Pedidos</HeaderTitle>
            </Header>
            <Content>
                {!!orders &&
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
                                    <OrderStatus>{order.status}</OrderStatus>
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
                                    <OrderTotal>R$ {order.total}</OrderTotal>
                                </Text>
                            </CardFooter>
                        </Card>
                    ))}
            </Content>
        </Container>
    );
};

export default Orders;
