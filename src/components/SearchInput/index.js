import React, {useState, useCallback} from 'react';

import {Container, TextInput, Icon} from './styles';

const SearchInput = ({value = '', ...rest}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        setIsFilled(!!value);
    }, [value]);

    return (
        <Container isFocused={isFocused}>
            <Icon
                name="search"
                size={20}
                color={isFocused || isFilled ? '#C72828' : '#B7B7CC'}
            />

            <TextInput
                placeholderTextColor="#B7B7CC"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                value={value}
                testID="null"
                {...rest}
            />
        </Container>
    );
};

export default SearchInput;
