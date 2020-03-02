import React from 'react'
import {RichText} from 'prismic-reactjs'

const Hero = ({title, content, backgroundImage}) => {
    console.log(title, content, backgroundImage);
    return (
        <div>
            <RichText render={title} />
            <p>
                {content[0].text}
            </p>
        </div>
    );
}

export default Hero;
