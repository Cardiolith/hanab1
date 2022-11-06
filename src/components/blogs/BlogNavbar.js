import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import DescCard from '../tool/DescCard';
import { Divider, Space } from 'antd';

const categories = [
    {
        name: 'Java',
        counter: 12
    },
    {
        name: 'Docker',
        counter: 2
    }
];

const tags = [
    {
        name: 'Spring'
    },
    {
        name: 'React'
    },
    {
        name: 'React'
    },
    {
        name: 'React'
    },
    {
        name: 'React'
    }
]

const BlogNavbar = () => {

    const desc = <code>Hi, Welcome to Hanab1's Blog</code>
    const blogCategories = categories.map((_, index) => (
        <div key={index}>{_.name}({_.counter})<Divider /></div>
    ));
    const blogTags = tags.map((_, index) => {
        return <Badge key={index} bg="info">{_.name}</Badge>
    })

    return (
        <>
            <DescCard key="desc" title="简介" content={desc} />
            <DescCard key="category" title="文章分类" content={blogCategories} />
            <DescCard key="tag" title="标签分类" content={<Space wrap>{blogTags}</Space>} />
        </>
    )
}

export default BlogNavbar;