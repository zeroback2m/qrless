import React from 'react';
import styled from 'styled-components/native'
import Container from './Container';
import Title from './Title';

export const Header = props => {
    return (
        <HeaderContainer flex="1">
            <Title>{props.title}</Title>
        </HeaderContainer>
    )
}

const HeaderContainer = styled(Container)`
    border-style: solid;
    border-bottom-color: ${props => props.theme.gray};
    border-bottom-width: 1px;
`;

export const Content = props => {
    return (
        <ContentContainer flex="9">
            {props.children}
        </ContentContainer>
    )
}

const ContentContainer = styled(Container)`
    width: 80%;
`;