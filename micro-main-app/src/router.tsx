import React from 'react';
import Home from './pages/home';
import Stories from './pages/home/stories';
import Xiaoshuo from './pages/home/xiaoshuo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from './pages/home/container';

/**
 * 鉴于微前端是多个项目集合，所以这里就应该使用history路由，不应该使用hash路由，由此会牵扯出nginx的映射问题，以及后端发送请求的baseurl问题
 */
export function HistoryRouters() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="stories" element={<Stories />} />
                    <Route path="xiaoshuo" element={<Xiaoshuo />} />
                    <Route path="/son1" element={<Container />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
