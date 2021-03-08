import React from 'react';

// import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button, ButtonText, Container} from './styles';

const ButtonLayout = ({children, ...rest}) => (
    <Container>
        <Button {...rest}>
            <ButtonText>{children}</ButtonText>
        </Button>
    </Container>
);

export default ButtonLayout;
