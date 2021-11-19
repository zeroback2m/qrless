import React, { useState } from 'react';
import Container from './components/Container';
import Button from './components/Button';
import Input from './components/Input';

const Join = () => {
    const [hello, setHello] = useState('hello');
    return (
        <Container>
            <Input onChange={e => setHello(e.nativeEvent.text)}/>
            <Button onPress={sayHello}>눌러!</Button>
        </Container>
    );

    function sayHello() {
        console.log(hello);
    }
};


export default Join;
