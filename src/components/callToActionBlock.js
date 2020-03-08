import React from 'react';
import {RichText} from 'prismic-reactjs';
import CallToActionGrid from './callToActionGrid';


const CallToActionBlock = ({title, content}) => {
    return (
        <div>
            <RichText render={title} />
            <RichText render={content} />
        </div>
    )
}

export default CallToActionBlock;