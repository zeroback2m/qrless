import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import Container from './components/Container';
import Button from './components/Button';
import Input from './components/Input';
import { theme } from './theme';

const Join = () => {
    const [hello, setHello] = useState('hello');
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Input onChange={e => setHello(e.nativeEvent.text)}/>
                <Button onPress={sayHello}>눌러!</Button>
            </Container>
        </ThemeProvider>
    );

    function sayHello() {
        console.log(hello);
    }
};


export default Join;
