import React from 'react';
import { ProgressViewIOSComponent, TextPropTypes } from 'react-native';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput.attrs(props => ({
    placeholderTextColor: props.theme.blue,
}))`
    width: 200px;
    height: 60px;
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.blue};
    font-size: 24px;
`;

const Input = props => {
    return <StyledInput onChange={props.onChange} placeholder="Enter a text..."/>;
}

export default Input;