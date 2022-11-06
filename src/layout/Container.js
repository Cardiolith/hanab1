import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Container.css';
import Header from './Header';
import Footer from './Footer';

function Container() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Container;