import React from 'react';
import styles from './Homepage.css';
import { Row, Col } from 'antd';
import BlogNavbar from '../components/blogs/BlogNavbar';
import BlogListContainer from '../components/blogs/BlogListContainer';

function Homepage() {

    const blogs = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => ({
        id: _,
        title: '标题-'+_,
        tags: ['1'],
        date: '2021-12-30',
        shortContent: 'content'.repeat(_+10)
    }))
    document.title = "首页"
    return (

        <Row className={styles.homepage}>
            <Col
                className={styles.post_content}
                span={12}
                offset={4}>
                <BlogListContainer blogs={blogs}/>
            </Col>
            <Col
                className={styles.post_navbar}
                span={4} offset={1}>
                <BlogNavbar />
            </Col>
        </Row>

    );
}

export default Homepage;