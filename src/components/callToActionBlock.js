import React from 'react';
import {RichText} from 'prismic-reactjs';
import styled from 'styled-components';
import {Link} from 'gatsby';

const CallToActionBlockWrapper = styled.section`
    padding: 20px;
    background: #eee;
    border-radius: 20px;
    margin: 20px;

    .call-to-action-content {
        display: flex;
        img {
            max-width: 100px;
        }
    }
`
const Button = styled.div`
    background: orange;
    display: inline-block;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;

    a {
        padding: 4px 8px;
        color: white;
        display: inline-block;
    }
    
`
const CallToActionBlock = ({title, content, buttonLabel, buttonDestination, featuredImage}) => {
    return (
        <CallToActionBlockWrapper>
            <RichText render={title} />
            <div className='call-to-action-content'>
                <RichText render={content} />
                <div>
                    <img src={featuredImage} alt="Featured" />
                </div>
            </div>
            <Button>
                <Link to={buttonDestination}>
                    {buttonLabel}
                </Link>
            </Button>
        </CallToActionBlockWrapper>
    )
}

export default CallToActionBlock;