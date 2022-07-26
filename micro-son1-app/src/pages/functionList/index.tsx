import React from 'react';
import './index.css';
import { useNavigate, Outlet, Link } from 'react-router-dom';

const FunctionList = () => {

    return (
        <div className='func-list'>
            <Link className='list-item' to={"/test"}>书籍类别</Link>
        </div>
    );
};

export default FunctionList;