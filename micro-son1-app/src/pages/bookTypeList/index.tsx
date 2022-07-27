import { store } from '@ice/stark-data';
import React, { useEffect, useState } from 'react';
import "./index.css";

const BookTypeList = () => {
    const [typed, setTyped] = useState<string>('');

    useEffect(() => {
        store.on('type', (type: string) => {
            console.log(`current language is ${type}`);
            setTyped(type);
        }, true);
    }, []);

    const handleClickZh = () => {
        store.set('language', 'zh');
    };

    const handleClickEn = () => {
        store.set('language', 'en');
    };

    return (
        <div className='book-type-list'>
            <div>
                <span className={typed === 'yilin' ? 'type-choosed' : 'type-item'}>意林图书</span>
                <div className={typed === 'huahuo' ? 'type-choosed' : 'type-item'}>花火</div>
                <div className={typed === 'shuge' ? 'type-choosed' : 'type-item'}>书格</div>
            </div>
            <div style={{ marginTop: 24 }}>
                <span className={typed === 'zh' ? 'type-choosed' : 'type-item'} onClick={handleClickZh}>中文</span>
                <span className={typed === 'en' ? 'type-choosed' : 'type-item'} onClick={handleClickEn}>英文</span>
            </div>
        </div>
    );
};

export default BookTypeList;