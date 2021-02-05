import React from 'react';
import Link from 'next/link'
import { truncate } from 'lodash';
import styled from 'styled-components';
import Icon from 'components/Icon';

interface Props {
    id: string,
    img: string,
    title: string,
    desc: string
}

const SingleHomeNews: React.FC<Props> = ({ id, img, title, desc }) => {
    return (
        <Link href={`/news/${id}`}>
            <Div className="col-md-4">
                <div className='news_image'>
                    <img alt='news_image' src={`${process.env.NEXT_PUBLIC_BLOG_URL}${img}`} />
                </div>
                
                <div className='news_details'>
                    <h4> { title } </h4>
                    <p>
                        { truncate(desc, { length: 180 }) }
                    </p>
                </div>

                <div className="more"> 
                    Selengkapnya <Icon type='arrow-right' size={20} strokeWidth={3} />
                </div>
            </Div>
        </Link>
    )
}

export default SingleHomeNews;

const Div = styled.div`
    cursor: pointer;
    margin-bottom: 2rem;

    .news_image {
        margin-bottom: 1rem;

        img {
            width: 100%;
            height: auto;
            max-height: 200px;
            border-radius: 15px;
        }
    }

    .news_details {
        margin-bottom: 1rem;

        p {
            font-size: 16px;
            margin-bottom: .5rem;
        }
    }

    .more {
        color: ${({theme}) => theme.pallete.color.primary};
        font-weight: ${({theme}) => theme.font.weight.medium};

        svg {
            margin-left: .2rem;
            color: ${({theme}) => theme.pallete.color.primary};
            transition: all .15s ease-in-out;
        }
    }

    &:hover {
        svg {
            transform: translateX(8px);
        }
    }
`