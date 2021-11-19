import React from 'react';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput.attrs(props => ({
    placeholderTextColor: props.theme.dark_gray,
}))`
    color: ${props => props.theme.black};
    width: 100%;
    height: 60px;
    margin: 5px;
    padding: 10px;
    border-bottom-color: ${props => props.theme.dark_gray};
    border-bottom-width: 2px;
    font-size: 18px;
`;

export const Input = props => {
    return <StyledInput secureTextEntry={props.isPassword} onChange={props.onChange} placeholder={props.placeholder}/>;
}