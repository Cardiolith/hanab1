import React from "react";
import PropTypes from 'prop-types';
import './BlogCard.less';
import { Link } from "react-router-dom";
import { TagOutlined } from '@ant-design/icons';
import preViewJpg from '../../assets/preview.jpg';

const BlogCard = ({ id, cover, title, tags, date, shortContent }) => {

    return (
        <div className="blog-card">
            <div className="blog-card-cover">
                <Link to={`blogs/${id}`}><img src={preViewJpg} /></Link>
            </div>

            <div className="blog-card-body">
                <div className="blog-card-title">
                    {title}
                </div>
                <div className="blog-card-content">
                    {shortContent}
                </div>
                <div className="blog-card-tag">
                    {tags && (
                        <TagOutlined />
                    )}
                </div>
            </div>
        </div>
    )
}

BlogCard.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    tags: PropTypes.array,
    date: PropTypes.string,
}

export default BlogCard;