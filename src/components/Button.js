import React from 'react'
import styled from 'styled-components/native';
import { Pressable, Text } from 'react-native';

const ButtonContainer = styled.Pressable`
    background-color: ${props => props.theme.black};
    border-radius: 15px;
    padding: 15px 40px;
    margin: 10px 10px;
    justify-content: center;
`;

const Title = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: #fff;
`;

const Button = props => {
    return (
        <ButtonContainer onPress={() => props.onPress()}>
            <Title>{props.title || props.children}</Title>
        </ButtonContainer>
    );
};

export default Button;