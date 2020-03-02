import React from 'react'
import {RichText} from 'prismic-reactjs'
import styled from 'styled-components'

const HeroWrapper = styled.section`
    background:url('${props=>props.backgroundImage}');
`


const Hero = ({title, content, backgroundImage}) => {
    console.log(title, content, backgroundImage);
    return (
        <HeroWrapper backgroundImage={backgroundImage}>
            <RichText render={title} />
            <p>
                {content[0].text}
            </p>
        </HeroWrapper>
    );
}

export default Hero;
