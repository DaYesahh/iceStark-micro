import { AppRoute, AppRouter } from '@ice/stark';
import React, { useEffect, useState } from 'react';
import "./index.css";
import { store } from '@ice/stark-data';

const Container = () => {
    const [data, setData] = useState<string>('');

    const handlePostData = () => {
        store.set('type', 'yilin');
    };

    useEffect(() => {
        store.on('language', (lang: string) => {
            lang == 'zh' && setData('中文');
            lang == 'en' && setData('英文');
        }, true);
    }, [])
    return (
        <div className='mico-container'>
            <button className='data-post-btn' onClick={handlePostData}>发送消息</button>
            <span className='data-msg'>从微应用传过来的消息：语言选择：{data}</span>
            <div id='content'>
                <AppRouter>
                    <AppRoute
                        name="micro-son1-app"
                        activePath="/son1"
                        title="古典文学"
                        entry='//localhost:3002'
                        loadScriptMode='fetch'
                        container={document.querySelector('#content') as HTMLElement}
                        // url="//localhost:3002" // 注意踩坑，不用url
                        // url={[
                        //     '/Users/lingshi/liuxp/study/mico/ice-stark-micros/micro-son1-app/build/static/js/main.902bb011.js',
                        //     '/Users/lingshi/liuxp/study/mico/ice-stark-micros/micro-son1-app/build/static/css/main.d1138529.css'
                        // ]}
                    />
                </AppRouter>
            </div>
        </div>
    );
};

export default Container;