import React from 'react';
import styled from 'styled-components';
import LoginContainer from 'containers/LoginContainer';

const Login = () => {
    return (
        <Div>
            <LoginContainer />
        </Div>
    )
}

export default Login

const Div = styled.div`
    background-color: ${({theme}) => theme.pallete.background.grey};
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`