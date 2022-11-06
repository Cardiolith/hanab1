import React from "react";
import PropTypes from 'prop-types';
import './DescCard.less';

function DescCard({ title, content }) {

    console.log(title, content);

    return (
        <div className="desc">
            <div className="desc-title">
                {title}
            </div>
            <div className="desc-content">
                {content}
            </div>
        </div>
    )
}

DescCard.propTypes = {
    title: PropTypes.string
}

export default DescCard;

