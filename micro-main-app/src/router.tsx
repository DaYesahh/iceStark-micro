import React from 'react';
import Home from './pages/home';
import Stories from './pages/home/stories';
import Xiaoshuo from './pages/home/xiaoshuo';

import { AppRouter, AppRoute } from '@ice/stark';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
                </Route>
                <Route path="/son1" element={IceRouter()} />
            </Routes>
        </BrowserRouter>
    );
}

export function IceRouter() {
    return (
        <AppRouter>
            <AppRoute
                name="micro-son1-app"
                activePath="/son1"
                title="古典文学"
                entry='//localhost:3002'
                loadScriptMode='fetch'
                container={document.querySelector('.main-app') as HTMLElement}
                // url="//localhost:3002"
                // url={[
                //     '/Users/lingshi/liuxp/study/mico/ice-stark-micros/micro-son1-app/build/static/js/main.902bb011.js',
                //     '/Users/lingshi/liuxp/study/mico/ice-stark-micros/micro-son1-app/build/static/css/main.d1138529.css'
                // ]}
            />
        </AppRouter>
    );
}
