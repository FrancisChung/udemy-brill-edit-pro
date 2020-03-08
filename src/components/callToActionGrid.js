import React from 'react';
import styled from 'styled-components';
import {RichText} from 'prismic-reactjs';
import CallToActionBlock from './callToActionBlock';

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
                    <CallToActionBlock 
                        key={i}
                        title={callToAction.call_to_action_title}
                        content={callToAction.content}
                    />
                )
            })}
        </CallToActionGridWrapper>
    )
}

export default CallToActionGrid;
