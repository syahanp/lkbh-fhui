import Button from 'components/Button';
import { rgba } from 'polished';
import React from 'react';
import styled from 'styled-components';

const DesktopNav = () => {
    return (
        <Div className='container'>
            <div className="navbar_logo">
                <img src="img/lkbh-logo.png" alt="logo"/>
            </div>
            <div className="navbar_menu">
                <ul>
                    <li>Home</li>
                    <li>Tentang Kami</li>
                    <li>Layanan</li>
                </ul>
            </div>
            <div className="navbar_login">
                <ul>
                    <li>Masuk</li>
                    <li>
                        <Button color='primary' variant='outline'>
                            Daftar
                        </Button>
                    </li>
                </ul>
            </div>
        </Div>
    )
}

export default DesktopNav;

const Div = styled.div`
    padding: 1.5rem 0rem;
    display: flex;
    align-items: center;

    ul {
        list-style-type: none;
        margin: 0 !important;
        padding: 0 !important;

        li {
            display: inline-block;
            font-size: 15px;
            border-radius: 3px;
            color: ${({theme}) => theme.pallete.text.primary};
            padding: 1.25rem;
            margin: 0px 2px;
            cursor: pointer;
            text-transform: uppercase;
            transition: all .15s ease-in-out;

            &:hover {
                /* background-color: ${({theme}) => theme.pallete.background.grey}; */
                color: ${({theme}) => theme.pallete.color.primary} !important;
            }
        }
    }

    .navbar_logo {
        flex: 1;
        display: flex;
        justify-content: center;
        
        img {
            margin-right: auto;
            width: auto;
            height: auto;
            max-height: 65px;
        }
    }

    .navbar_menu {
        flex: 1;
        display: flex;
        justify-content: center;
    }

    .navbar_login {
        flex: 1;
        display: flex;
        justify-content: center;

        ul  {
            margin-left: auto !important;

            li:last-child {
                padding: 0rem .5rem;
            }
        }
    }
`
