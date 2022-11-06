import React from 'react';
import styles from './About.css';

function About() {
    document.title = "关于"
    return (
        <div className={styles.about}>
            About
        </div>
    )
}

export default About;