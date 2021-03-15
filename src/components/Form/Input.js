import React, {useRef, useEffect, useCallback} from 'react';
import {Text} from 'react-native';
import {useField} from '@unform/core';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {TxtInput, Container} from './styles';

function Input({style, icon, name, onChangeText, ...rest}) {
    const inputRef = useRef(null);

    const {fieldName, registerField, defaultValue, error} = useField(name);

    useEffect(() => {
        inputRef.current.value = defaultValue;
    }, [defaultValue]);

    useEffect(() => {
        if (inputRef.current) inputRef.current.value = defaultValue;
    }, [defaultValue]);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            getValue() {
                if (inputRef.current) return inputRef.current.value;

                return '';
            },
            setValue(ref, value) {
                if (inputRef.current) {
                    inputRef.current.setNativeProps({text: value});
                    inputRef.current.value = value;
                }
            },
            clearValue() {
                if (inputRef.current) {
                    inputRef.current.setNativeProps({text: ''});
                    inputRef.current.value = '';
                }
            },
        });
    }, [fieldName, registerField]);

    const handleChangeText = useCallback(
        (text) => {
            if (inputRef.current) inputRef.current.value = text;

            if (onChangeText) onChangeText(text);
        },
        [onChangeText],
    );

    return (
        <Container style={style}>
            {!!icon && (
                <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.6)" />
            )}

            <TxtInput
                ref={inputRef}
                onChangeText={handleChangeText}
                defaultValue={defaultValue}
                className={error ? 'has-error' : ''}
                {...rest}
            />

            {error && <Text className="error">{error}</Text>}
        </Container>
    );
}

export default Input;
