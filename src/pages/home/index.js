import { Input, Space, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DescCard from "../../components/common/DescCard";
import Posts from "./components/posts";
import './index.less';

const Homepage = () => {

    const [posts, setPosts] = useState([]);
    const [postsLoading, setPostsLoading] = useState(false);
    const [pageIndex, setPageIndex] = useState(1);
    const [total, setTotal] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        setPostsLoading(true);
        setPosts([
            {
                id: 1,
                title: "Spring Boot 注解解析 实现机制及原理",
                content: "",
                cover: "",
                tags: ["Java", "Spring"],
                preview: "这一策略非常方便用户在Controller或者Service层获取当前登录用户数据，但是带来的另外一个问题就是，在子线程中想要获取用户登录数据就比较麻烦。Spring Security对此也提供了相应的解决方案，如果开发者使用@Async注解来开启异步任务的话，那么只需要添加如下配置，使用Spring Security提供的异步任务代理，就可以在异步任务中从Security ContextHolder里边获取当前登录用户的信息"
            },
            {
                id: 2,
                title: "React 入门",
                content: "",
                cover: "https://hanab1.oss-cn-shanghai.aliyuncs.com/2022/11/pikachu.png",
                tags: ["Javascript", "React"]
            },
            {
                title: "React 入门",
                content: "",
                cover: "https://hanab1.oss-cn-shanghai.aliyuncs.com/2022/11/pikachu.png",
                tags: ["Javascript", "React"]
            },
            {
                title: "React 入门",
                content: "",
                cover: "https://hanab1.oss-cn-shanghai.aliyuncs.com/2022/11/pikachu.png",
                tags: ["Javascript", "React"]
            },
            {
                title: "React 入门",
                content: "",
                cover: "https://hanab1.oss-cn-shanghai.aliyuncs.com/2022/11/pikachu.png",
                tags: ["Javascript", "React"]
            },
            {
                title: "React 入门",
                content: "",
                cover: "https://hanab1.oss-cn-shanghai.aliyuncs.com/2022/11/pikachu.png",
                tags: ["Javascript", "React"]
            },
            {
                title: "React 入门",
                content: "",
                cover: "https://hanab1.oss-cn-shanghai.aliyuncs.com/2022/11/pikachu.png",
                tags: ["Javascript", "React"]
            }
        ]);
        setPostsLoading(false);
    }, [pageIndex]);

    const CategoryItem = ({ item }) => (
        <div key={item.code} className="category"><Link to={`/categories/${item.code}`}><span>{item.name}<code>({item.num})</code></span></Link></div>
    )

    const categories = [
        {
            code: "Java",
            name: "Java",
            num: 10
        },
        {
            code: "Docker",
            name: "Docker",
            num: 2
        }
    ];

    const TagItem = (tag) => (
        <Tag><Link to={`/tags/${tag}`}>{tag}</Link></Tag>
    )

    const tags = [
        "Java", "Spring Boot", "Spring", "Javascript", "React", "Redux"
    ]

    return (
        <div className="home-container">
            <div className="posts-container">
                <Posts posts={posts} loading={postsLoading} pageIndex={pageIndex} total={total} />
            </div>
            <div className="sider-container">
                <Input.Search />
                <DescCard title="简介" content="Cardiolith的技术博客" />
                <DescCard title="文章分类" content={ categories.map((item, _) => CategoryItem({item}) )} />
                <DescCard title="标签" content={<Space wrap={true}>{tags.map((tag, _) => TagItem(tag))} </Space>} />
            </div>
        </div>
    )
};

export default Homepage;