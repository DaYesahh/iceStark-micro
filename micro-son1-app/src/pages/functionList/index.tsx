import React, { useEffect } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { store } from '@ice/stark-data';

const FunctionList = () => {

    return (
        <div className='func-list'>
            <Link className='list-item' to={"/test"}>书籍类别</Link>
        </div>
    );
};

export default FunctionList;