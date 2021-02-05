import React from 'react';
import styled from 'styled-components';
import NewsContainer from './NewsContainer';

const News = () => {

    return (
        <Div>
            <div className="section-title">
                <h3>Berita Terbaru</h3>
            </div>

            <NewsContainer />
        </Div>
    )
}

export default News;

const Div = styled.div`
    padding: 4rem 0rem;

    .section-title {
        margin-bottom: 5rem;
        text-align: center;
    }
`
