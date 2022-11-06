import React from "react";
import PropTypes from 'prop-types';
import BlogCard from "./BlogCard";
import { Space } from "antd";
import { Pagination } from "react-bootstrap";
import './BlogListContainer.less';

const BlogListContainer = ({ blogs }) => {

    return (
        <>
            <Space wrap size="middle">
                {blogs.map((blog, index) => (
                    <BlogCard {...blog} key={index} />
                ))}
            </Space>
            <div className="pagination">
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Ellipsis />
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>
        </>
    )
}

BlogListContainer.propTypes = {
    blogs: PropTypes.array
}

export default BlogListContainer;