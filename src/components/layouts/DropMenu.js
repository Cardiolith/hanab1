import React from "react";
import PropTypes from 'prop-types';
import { Dropdown } from "antd";

const DropMenu = ({ open, menus }) => {

    return (
        <Dropdown menu={menus} />
    );
}

DropMenu.propTypes = {
    open: PropTypes.bool,
    menus: PropTypes.array
}