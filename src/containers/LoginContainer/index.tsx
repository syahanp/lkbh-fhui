import React from 'react'
import styled from 'styled-components';
import LoginForm from './LoginForm';
import Paper from 'components/Paper';

const LoginContainer = () => {
    return (
        <Paper>
            <h3>Login</h3>
            
            <br/>

            <LoginForm />
        </Paper>
    )
}

export default LoginContainer;

const Div = styled.div`

    h3 {
        text-align: center;
    }
`
