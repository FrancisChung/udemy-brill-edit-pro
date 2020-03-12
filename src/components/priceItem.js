import React from 'react';
import {RichText} from 'prismic-reactjs';

const PriceItem = ({title}) => {
    return (
        <div>
            <RichText render={title} />
        </div>
    )

}

export default PriceItem;