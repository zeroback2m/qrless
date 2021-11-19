import React from 'react';
import { ProgressViewIOSComponent } from 'react-native';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput`
    width: 200px;
    height: 60px;
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #3498db;
    font-size: 24px;
`;

const Input = props => {
    return <StyledInput onChange={props.onChange} placeholder="Enter a text..." placeholderTextColor="#3498db"/>;
}

export default Input;