import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Home = () => {
    return (
        <View style = {style.screen}>
            <Text>Settings</Text>
        </View>
    );
};

const style = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;