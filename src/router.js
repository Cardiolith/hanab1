import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Container from './layout/Container';
import NotFound from './pages/NotFound';
import BlogView from './pages/blogs/BlogView';

function RouterConfig() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Container />}>
                    <Route index element={<Homepage />} />
                    <Route path='about' element={<About />} />
                    <Route path="blogs/:id" element={<BlogView />} />
                    <Route path='categories/:category' />
                    <Route path='tags/:tag' />
                    <Route path='*' element={<NotFound />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default RouterConfig;