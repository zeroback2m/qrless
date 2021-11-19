import React from 'react';
import { TextPropTypes } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
    flex: ${props => props.flex ? props.flex : 1};
    background-color: #fff;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex: ${props => props.flex};
`;

export default Container;