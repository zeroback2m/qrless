import React, {useState, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import Container from './components/Container';
import Button from './components/Button';
import { Input } from './components/Input';
import { Header, Content } from './components/Layout';
import { theme } from './theme';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../firebaseConfig'

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ThemeProvider theme = {theme}>
            <Container>
                <Header title = "로그인"/>
                <Content>
                    <Input placeholder = "이메일"
                    label = "Email"
                    value = {email}
                    onChange={text => setEmail(text)}
                    returnKetType = "next"
                    />
                    <Input
                    placeholder = "비밀번호"
                    label = "Password"
                    value = {password}
                    onChange={text => setPassword(text)}
                    onSubmitEditing = {() => {}}
                    returnKetType = "done"
                    isPassword = {true}
                    />
                    <View style = {styles.container}>
                        <Button isFilled={true} onPress={abc}>로그인</Button>
                        <Button isFilled={true} onPress={() => navigation.navigate('JOIN')}>회원가입</Button>
                    </View>
                </Content>
            </Container>
        </ThemeProvider>
    )

    function abc() {
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, 'test@test.com', '123456789')
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential.user.email);
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row'
    }
});
export default Login