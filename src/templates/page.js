import React from 'react';
import {graphql} from 'gatsby';
import {RichText} from 'prismic-reactjs';

export const query = graphql`
query PageQuery($id: String) {
    prismic {
        allPages(id: $id) {
        edges {
            node {
                _meta {
                    id
                    uid
                }
            }
        }
    }
}
}
`

const Page = (props) => {
    console.log(props);

    const pageTitle = props.data.prismic.allPages.edges[0].node.page_title;

    return (
        <RichText render={pageTitle} />
    )
}

export default Page;