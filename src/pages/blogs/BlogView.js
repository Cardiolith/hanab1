import { FieldTimeOutlined, TagOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import MarkdownNavbar from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import { Space } from "antd";
import moment from "moment";
import './BlogView.less';
import mockBlog from '../../../mock/blogs/blog';

const BlogView = () => {

    const [blog, setBlog] = useState({});


    const content = `## 设计模式学习

    #### Chapter
    
    Design Principles:	
    
    - 找出应用可能需要变化之处，并把它们独立出来，不要把它们和那些不变的代码混在一起。
    - 多用组合，少用继承。
    - 针对接口编程，而不是针对实现编程。
    - 找出应用可能需要变化之处，并把它们独立出来，不要把它们和那些不变的代码混在一起。
    - 多用组合，少用继承。
    - 针对接口编程，而不是针对实现编程。
    - 找出应用可能需要变化之处，并把它们独立出来，不要把它们和那些不变的代码混在一起。
    - 多用组合，少用继承。
    - 针对接口编程，而不是针对实现编程。
    - 找出应用可能需要变化之处，并把它们独立出来，不要把它们和那些不变的代码混在一起。
    - 多用组合，少用继承。
    - 针对接口编程，而不是针对实现编程。
    - 找出应用可能需要变化之处，并把它们独立出来，不要把它们和那些不变的代码混在一起。
    - 多用组合，少用继承。
    - 针对接口编程，而不是针对实现编程。
    - 找出应用可能需要变化之处，并把它们独立出来，不要把它们和那些不变的代码混在一起。
    - 多用组合，少用继承。
    - 针对接口编程，而不是针对实现编程。
    - 找出应用可能需要变化之处，并把它们独立出来，不要把它们和那些不变的代码混在一起。
    - 多用组合，少用继承。
    - 针对接口编程，而不是针对实现编程。
    - 找出应用可能需要变化之处，并把它们独立出来，不要把它们和那些不变的代码混在一起。
    - 多用组合，少用继承。
    - 针对接口编程，而不是针对实现编程。
    - 找出应用可能需要变化之处，并把它们独立出来，不要把它们和那些不变的代码混在一起。
    - 多用组合，少用继承。
    - 针对接口编程，而不是针对实现编程。
    - 找出应用可能需要变化之处，并把它们独立出来，不要把它们和那些不变的代码混在一起。
    - 多用组合，少用继承。
    - 针对接口编程，而不是针对实现编程。
    - 找出应用可能需要变化之处，并把它们独立出来，不要把它们和那些不变的代码混在一起。
    - 多用组合，少用继承。
    - 针对接口编程，而不是针对实现编程。

    ## chapter 3
    `

    useEffect(() => {
        setBlog({
            title: '设计模式',
            tags: ["设计模式"],
            date: '2022-07-03'
        })
    }, []);

    return (
        <div className="blog-view">
            <div className="blog-container">
                <div className="blog-title">
                    {blog.title}
                </div>
                <Space
                    className="blog-data-items"
                    direction="horizontal"
                    size="middle">
                    <div className="blog-data-item">
                        <FieldTimeOutlined /> {moment(blog.date).format('YYYY-MM-DD')}
                    </div>
                    <div className="blog-data-item"><TagOutlined /> {blog.tags?.join(',')}</div>
                </Space>

                <ReactMarkdown children={mockBlog} remarkPlugins={[remarkGfm]} />
            </div>
            <div className="navbar-container">
                <p className="navbar-title">文章目录</p>
                <MarkdownNavbar source={mockBlog} />
            </div>
        </div >
    )
}

export default BlogView;