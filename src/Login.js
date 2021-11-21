import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import Container from './components/Container';
import Button from './components/Button';
import { Input } from './components/Input';
import { Header, Content } from './components/Layout';
import { theme } from './theme';
import { Component } from 'react';

const Join = () => {
    const [hello, setHello] = useState('hello');
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Header title="로그인"/>
                <Content>
                <   Input placeholder="아이디" onChange={e => setHello(e.nativeEvent.text)}/>
                    <Input placeholder="비밀번호" isPassword={true} onChange={e => setHello(e.nativeEvent.text)}/>
                    <View style = {styles.container}>
                        <Button isFilled={true} onPress={login}>로그인</Button>
                        <Button isFilled={true} onPress={() => this.props.navigation.navigate('JOIN')}>회원가입</Button>
                    </View>
                </Content>
            </Container>
        </ThemeProvider>
    )

    function login() {
        console.log('로그인');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row'
    }
});
export default Login