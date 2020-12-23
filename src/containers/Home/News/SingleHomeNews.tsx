import React from 'react';
import styled from 'styled-components';

const SingleHomeNews = () => {
    return (
        <Div className='col-md-4'>
            <div className='news_image'>
                <img alt='news_image' src='/img/image1.jpg' />
            </div>
            
            <div className='news_details'>
                <h4>Berita Hari Ini</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </Div>
    )
}

export default SingleHomeNews;

const Div = styled.div`
    .news_image {
        margin-bottom: 1rem;

        img {
            width: auto;
            height: auto;
            max-height: 250px;
        }
    }

    .news_details {
        p {
            font-size: 16px;
            margin-bottom: .5rem;
        }
    }
`
