import React from "react";
import PropTypes from 'prop-types';
import { TagOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import './PostCard.less';
import moment from "moment";

const PostCard = ({ id, title, cover, preview, tags }) => {

    const date = "2022/11/30/"

    return (
        <div className="post-card">
            <div className="cover">
                <img src="https://hanab1.oss-cn-shanghai.aliyuncs.com/2022/11/pikachu.png" />
                <div className="update-date">
                    <div className="update-day">
                        {moment(date).get("day")}
                    </div>
                    <div className="update-month">
                        {moment(date).get("month") + "月"}
                    </div>
                </div>
            </div>
            <div className="post-info">
                <div className="title">
                    <Link to={`/posts/${id}`}>{title}</Link>
                </div>
                <p className="preview">
                    {preview}
                </p>
                <div className="tags">
                    <TagOutlined />{tags.map((tag, index) => (<Link to={`/tags/${tag}`}> {tag}{index == tags.length - 1 ? "" : ", "}</Link>))}
                </div>
            </div>
        </div>
    );
}

PostCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    cover: PropTypes.string,
    tags: PropTypes.array
}

export default PostCard;

