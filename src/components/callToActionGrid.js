import React from 'react';
import styled from 'styled-components';
import {RichText} from 'prismic-reactjs'

const CallToActionGridWrapper = styled.section`
    max-width: 800px;
    margin: 0 auto;
`


const CallToActionGrid = ({title, callToActions}) => {
    return (
        <CallToActionGridWrapper>
            <RichText render={title} />
            {callToActions.map((callToAction,i) => {
                return (
                    <div key={i}>
                        Call To Action
                    </div>
                )
            })}
        </CallToActionGridWrapper>
    )
}

export default CallToActionGrid;
