import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
    body: {
        color: '#f5f',
    },
});

const App = () => (
    <>
        <View>
            <Text style={styles.body}>Hello World!</Text>
        </View>
    </>
);

export default App;
