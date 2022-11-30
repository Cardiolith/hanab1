import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts';
import Homepage from './pages/home';
import NotFound from './pages/404';
import Archives from './pages/archives';
import AboutPage from './pages/about';
import TagsPage from './pages/tags';
import PostPage from './pages/posts';
import CategoryPage from './pages/categories';

function RouterConfig() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path='archives' element={<Archives />} />
                    <Route path='about' element={<AboutPage />} />
                    <Route path="posts/:id" element={<PostPage />} />
                    <Route path='categories/:category' element={<CategoryPage />} />
                    <Route path="tags/:tag" element={<TagsPage />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterConfig;