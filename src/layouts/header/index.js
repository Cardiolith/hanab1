import React, { useEffect, useRef, useState } from "react";
import { Dropdown, Space, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import classNames from "classnames";
import { Link } from 'react-router-dom';
import './index.less';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (document.body.offsetWidth > 800) {
                setMenuOpen(false);
            }
        }, false);
    }, []);


    const MenuItem = ({ key, path, title }) => {
        return <Link className="menu-item" key={key} to={path}>{title}</Link>
    }

    const menuItems = <Menu items={[
        { key: "home", label: <Link to="/" onClick={e => setMenuOpen(false)}>首页</Link> }, 
        { key: "archives", label: <Link to="/archives" onClick={e => setMenuOpen(false)}>归档</Link> },
        { key: "about", label: <Link to="/about" onClick={e => setMenuOpen(false)}>关于</Link>}
    ]} />

    return (
        <header className={classNames('hanab1-header', 'fixed-header')}>
            <div className="header-wrapper">
                <div className="header-logo">
                    Hanab1
                </div>
                <div className="placeholder">

                </div>
                <div className="header-menu-btn">
                    <Dropdown
                        open={menuOpen}
                        placement="bottomCenter"
                        overlayClassName="menu-dropdown"
                        overlay={menuItems}
                        overlayStyle={{ padding: 0 }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <MenuOutlined onClick={(e) => { setMenuOpen(!menuOpen); }} />
                        </div>
                    </Dropdown>
                </div>
                <div className="header-menu">
                    <Space size="large">
                        {
                            [
                                {
                                    key: "home",
                                    path: "/",
                                    title: "首页"
                                },
                                {
                                    key: "archives",
                                    path: "/archives",
                                    title: "归档"
                                },
                                {
                                    key: "about",
                                    path: "/about",
                                    title: "关于"
                                }
                            ].map((item, _) => MenuItem(item))
                        }
                    </Space>
                </div>
            </div>
        </header>
    )
}

export default Header;