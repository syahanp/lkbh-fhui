import Button from 'components/Button';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const DesktopNav = () => {
    return (
        <Div>
            <div className='container wrapper'>
                <div className="navbar_logo">
                    <img src="img/lkbh-logo.png" alt="logo"/>
                </div>
                <div className="navbar_menu">
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about'>Tentang Kami</Link></li>
                        {/* <li><Link href='/layanan'>Layanan</Link></li> */}
                    </ul>
                </div>
                <div className="navbar_login">
                    <ul>
                        <li>Kontak Kami</li>
                        {/* <li><Link href='/login'>Masuk</Link></li>
                        <li>
                            <Button element='a' color='primary' variant='outline' href='/register'>
                                Daftar
                            </Button>
                        </li> */}
                    </ul>
                </div>
            </div>
        </Div>
    )
}

export default DesktopNav;

const Div = styled.div`
    padding: 1.5rem 0rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    .wrapper {
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
                padding: 1.25rem;
                margin: 0px 2px;
                cursor: pointer;
                text-transform: uppercase;

                a {
                    color: #fff;
                    transition: all .15s ease-in-out;
                    
                    &:hover {
                        color: ${({theme}) => theme.pallete.color.secondary};
                    }
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
                color: #fff;

                li:last-child {
                    padding: 0rem .5rem;
                }
            }
        }
    }

`
