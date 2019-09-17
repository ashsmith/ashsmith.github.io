import React from 'react';
import Link from 'gatsby-link'
import styled from 'styled-components';
const _ = require('lodash')

const BlogLink = styled(Link)`
    font-size: 1.6875rem;
    box-shadow: none;
    text-decoration: none;
    color: inherit;
    line-height: 1.5;
`;

const pointyHand = "👉";
const PostItem = styled.div`
@media (min-width: 700px) {
    display: grid;
    grid-template-columns: 36rem 1fr;
    padding: 2rem 4rem;

    &:hover {
        box-shadow: 0 5px 15px -1px rgba(0,0,0,0.20);
        border-radius: 8px;
        grid-template-columns: 4rem 36rem 1fr;
        p a {
            color: #3567E8;
            &:hover {
                text-decoration: none;
            }
        }
    }

    &:hover:before {
        display: inline-block;
        content: "${pointyHand}";
        font-size: 2.5rem;
        align-self: center;
    }
}
`;

const PostDate = styled.small`
    color: #9F9F9F;
    display: block;
    font-size: 0.875rem;
    margin-bottom: 0.3rem;
`;

const PostExcerpt = styled.p`
    margin-bottom: 0;
`;

const PostWrap = styled.div`
    margin: 0;
    align-self: center;
`;

const Tags = styled.span`
    align-self: center;
    text-align:right;
    color: #9F9F9F;
    font-size: ${14/16}rem;

    & a {
        color: inherit;
        box-shadow: none;
        text-decoration: none;
        :hover {
            color: inherit;
            text-decoration: underline;
        }
    }
`;

const PostTitle = styled.h3`
    line-height: 1.5;
    font-weight: 600;
    margin-bottom: 0;
`;

class BlogPostItem extends React.Component
{
    render() {
        return (
        <PostItem>
            <PostWrap>
                <PostDate>Posted on {this.props.date}</PostDate>
                <PostTitle><BlogLink to={this.props.slug}>{this.props.title}</BlogLink></PostTitle>
            </PostWrap>
                {this.props.category !== null && (<Tags><Link to={'/' + _.toLower(this.props.category.replace(/\s/g, '')) + '/'}>{this.props.category}</Link></Tags>)}
        </PostItem>
        );
    }
}

export default BlogPostItem