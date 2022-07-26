import React from 'react';
import apps from '@/micro/apps';
import { routes } from '@/routes';
import { Link } from 'react-router-dom';
import './index.css';

const SideBar = () => {

    return (
        <div className='side-bar'>
            {
                routes.map((item: any) => (
                    <Link className='list-item' key={item.key} to={item.path}>{item.name}</Link>
                ))
            }
            {
                apps.map((item: any) => (
                    <Link className='list-item' key={item.name} to={item.activeRule}>{item.nameZh}</Link>
                ))
            }
            <div className='adver-insert'>持续征收广告位</div>
        </div>
    );
};

export default SideBar;