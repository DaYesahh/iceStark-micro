import React from 'react';
import './index.css';
import { Outlet, useLocation } from 'react-router-dom';
import Container from '@/pages/home/container';
import SideBar from '@/pages/home/sideBar';

const Home = () => {
    const location = useLocation();

    return (
        <div className='home'>
            <div className='home-title'>欢迎来到这个书店</div>
            <div className='home-layout'>
                <SideBar />
                {
                    location.pathname === "/son1" ? (<Container />) : (<Outlet />)
                }
            </div>
        </div>
    );
};

export default Home;