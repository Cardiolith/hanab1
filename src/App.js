import React from 'react';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import RouterConfig from './router';
import './App.less';

export default () => {

    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs">
            <RouterConfig />
        </ThemeProvider>
    )
}