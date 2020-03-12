import React from 'react';
import styled from 'styled-components';
import {RichText} from 'prismic-reactjs';

const PriceItemWrapper = styled.div`
    flex-grow: 1;
    flex-basis: 0;
    margin: 0 10px;
`

const PriceItem = ({title, price, description}) => {
    return (
        <PriceItemWrapper>
            <RichText render={title} />
            <div className="price">
                {price} <span className="duration">/ month</span>
            </div>
            <RichText render={description} />
        </PriceItemWrapper>
    )

}

export default PriceItem;