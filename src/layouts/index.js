import React from "react";
import { } from 'antd';
import './index.less';
import Header from "./header/index";
import Footer from './footer/index';
import { Outlet } from "react-router-dom";

const Container = () => {

    return (
        <>
            <Header />
            <main className="hanab1-main-container">
                <Outlet />
            </main>
            <Footer />
        </>
    )
};

export default Container;