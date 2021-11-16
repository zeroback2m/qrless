import React from 'react';
import { View, Text } from 'react-native';
import { joinStyles } from './styles/JoinStyles';

const Join = () => {
    return (
        <View style={joinStyles.container}>
            <Text style={joinStyles.text}>
                회원가입
            </Text>
            <Text style={[joinStyles.text, joinStyles.error]}>
                회원가입
            </Text>
        </View>
    );
};



export default Join;