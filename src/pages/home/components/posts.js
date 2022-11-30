import React, { lazy } from "react";
import PropTypes from 'prop-types'
import { Pagination, Spin } from 'antd';
import PostCard from '../../../components/archives/PostCard';
import './posts.less';

const Posts = ({ posts, loading, total, pageIndex }) => {

    return <>
        <div className="posts-list-container">
            <Spin spinning={loading}>
                <div className="posts-list">
                    {posts.map((item, index) => <PostCard {...item} />)}
                </div>
            </Spin>
        </div>
        <div className="posts-pagination">
            <Pagination total={total} pageIndex={pageIndex} />
        </div>
    </>
}

Posts.propTypes = {
    posts: PropTypes.array,
    loading: PropTypes.bool,
    total: PropTypes.number,
    pageIndex: PropTypes.number
}

export default Posts;