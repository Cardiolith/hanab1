import React from "react";
import { Space } from 'antd';
import { GithubOutlined, MailOutlined, AntDesignOutlined } from '@ant-design/icons';
import './index.less';

const Footer = () => {

    const LinkItem = ({ href, icon, content }) => (
        <div className="link-item" key={content}><a key={content} target="_blank" href={href}>{icon} {content}</a></div>
    )

    return (
        <footer className="hanab1-footer">
            <section className="footer-content">
                <div className="about-me">
                    <div className="title">
                        Hanba1
                    </div>
                    <div className="description">
                        菜鸟码农的博客
                    </div>
                    <div className="footer-links">
                        {[
                            {
                                href: "mailto:1654169282@qq.com",
                                icon: <MailOutlined />,
                                content: "1654169282@qq.com"
                            },
                            {
                                href: "https://github.com/Cardiolith/hanab1",
                                icon: <GithubOutlined />,
                                content: "Github"
                            }
                        ].map((item, index) => LinkItem(item))}
                    </div>
                </div>
                <div style={{ flex: "1"}} />
                <div className="build">
                    <div className="title">
                        Build
                    </div>
                    <div className="description">
                        站点构建工具
                    </div>
                    <div className="footer-links">
                        {
                            [
                                {
                                    href: "https://webpack.docschina.org/concepts/",
                                    content: "Webpack"
                                },
                                {
                                    href: "https://reactjs.org/",
                                    content: "React"
                                },
                                {
                                    href: "https://ant.design/index-cn",
                                    icon: <AntDesignOutlined />,
                                    content: <span>Ant-Design - 蚂蚁开源UI框架</span>
                                },
                            ].map((item, index) => LinkItem(item))
                        }
                    </div>
                </div>
            </section>

            <section className="footer-bottom">
                <span>Made by Cardi01ith</span>
            </section>
        </footer>
    )
}

export default Footer;