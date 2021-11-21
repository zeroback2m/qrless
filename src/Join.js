import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import Container from './components/Container';
import Button from './components/Button';
import { Input } from './components/Input';
import { Header, Content } from './components/Layout';
import { theme } from './theme';

const Join = () => {
    const [hello, setHello] = useState('hello');
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Header title="회원가입"/>
                <Content>
                    <Input placeholder="아이디" onChange={e => setHello(e.nativeEvent.text)}/>
                    <Input placeholder="비밀번호" isPassword={true} onChange={e => setHello(e.nativeEvent.text)}/>
                    <Input placeholder="비밀번호 확인" isPassword={true} onChange={e => setHello(e.nativeEvent.text)}/>
                    <Input placeholder="이름" onChange={e => setHello(e.nativeEvent.text)}/>
                    <Input placeholder="휴대전화번호 ('-' 제외)" onChange={e => setHello(e.nativeEvent.text)}/>
                    <Input placeholder="학번" onChange={e => setHello(e.nativeEvent.text)}/>
                    <Button isFilled={true} onPress={join}>회원가입</Button>
                </Content>
            </Container>
        </ThemeProvider>
    );

    function join() {
        console.log('회원가입');
    }
};


export default Join;