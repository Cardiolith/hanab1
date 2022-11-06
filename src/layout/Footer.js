import { Row, Col, Space } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.less';
import { MailOutlined, GithubOutlined } from '@ant-design/icons';

export default function Footer() {
    const navigate = useNavigate();

    const toOutWebsite = (url) => {
        navigate(url);
    }

    return (
        <footer className="footer">
            <section className='container'>
                <Row>
                    <Col span={10}>
                        <div className='title'>About Me</div>
                        <div className='description'>立志全栈的菜鸟码农..</div>
                        <Space direction='vertical'>
                            <a className='item' href='mailto:1654169282@qq.com'><MailOutlined />1654169282@qq.com</a>
                            <a className='item' href='https://github.com/Cardiolith/hanab1' target="_blank"><GithubOutlined />Cardi01ith</a>
                        </Space>
                    </Col>
                    <Col span={10} offset={4}>
                        <div className='title'>Links</div>
                        <Space direction='vertical'>
                            <a className='item' target="_blank" href='https://reactjs.org/docs/getting-started.html'>
                                React<span className='item-description'> - React 官方文档</span>
                            </a>
                            <a className='item' target="_blank" href='https://reactjs.org/docs/getting-started.html'>
                                Ant-Design<span className='item-description'> - 蚂蚁开源UI框架</span>
                            </a>
                            <a className='item' target="_blank" href='https://react-bootstrap.github.io/getting-started/introduction'>
                                react-bootstrap<span className='item-description'> - replace bootstrap Javascript</span>
                            </a>
                        </Space>
                    </Col>
                </Row>
            </section>
            <section className='footer-bottom'>
                <span> Made By Cardi01ith</span>
            </section>
        </footer>
    )
}