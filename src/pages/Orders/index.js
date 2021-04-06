import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

import {View, Text, ActivityIndicator, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import formatValue from '~/utils/formatValue';

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

import {orderRequest, orderCancel} from '~/store/modules/order/actions';

const Orders = () => {
    const dispatch = useDispatch();

    useFocusEffect(
        React.useCallback(() => {
            dispatch(orderRequest());
        }, []),
    );

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(orderRequest());
        }, 20000);
        return () => clearInterval(interval);
    }, []);

    const {loading, orders} = useSelector((state) => state.order);

    const cancelOrderAlert = (id) =>
        Alert.alert(
            'Cancelar',
            `Deseja cancelar pedido?\n\nAtenção: pedidos com mais de 10 minutos não podem ser cancelados pelo sistema.`,
            [
                {
                    text: 'Cancel',
                    onPress: () => {},
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => dispatch(orderCancel(id))},
            ],
        );

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
                                            cancelOrderAlert(order.id)
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
                                    <Text style={{fontSize: 15}}>
                                        <OrderTotal>
                                            {formatValue(order.total)}
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
                                carrinho e realize sua compra :)
                            </TitleEmpty>
                        </View>
                    )}
                </Content>
            )}
        </Container>
    );
};

export default Orders;
