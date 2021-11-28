import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import Container from './components/Container';
import Button from './components/Button';
import { Input } from './components/Input';
import { Header, Content } from './components/Layout';
import { theme } from './theme';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from '../firebaseConfig'

const Join = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordForCheck, setPasswordForCheck] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [studentId, setStudentId] = useState();

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Header title="회원가입"/>
                <Content>
                    <Input placeholder="이메일" value={email} onChange={e => setEmail(e.nativeEvent.text)}/>
                    <Input placeholder="비밀번호" isPassword={true} value={password} onChange={e => setPassword(e.nativeEvent.text)}/>
                    <Input placeholder="비밀번호 확인" isPassword={true} value={passwordForCheck} onChange={e => setPasswordForCheck(e.nativeEvent.text)}/>
                    <Input placeholder="이름" value = {name} onChange={e => setName(e.nativeEvent.text)}/>
                    <Input placeholder="휴대전화번호 ('-' 제외)" value={phone} onChange={e => setPhone(e.nativeEvent.text)}/>
                    <Input placeholder="학번" value={studentId} onChange={e => setStudentId(e.nativeEvent.text)}/>
                    <Button isFilled={true} onPress={join}>회원가입</Button>
                </Content>
            </Container>
        </ThemeProvider>
    );

    function join() {
        const user = {
            email,
            password,
            name,
            phone,
            studentId
        }
        if (canPassValidation()) {
            console.log("회원가입 가능");
            registerUserOnDB(user);
        } else {
            console.log("회원가입 불가능");
        }
    }

    function canPassValidation() {
        // Check email(ex. abc@abc.com)
        if (password != passwordForCheck) return false;
        // Check name(Korean only)
        // Check phone(no -)
        // Check student id(8 digits)
        return true;
    }

    function registerUserOnDB() {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(email, "회원가입 성공");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
};



export default Join;