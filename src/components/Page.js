import React from 'react';
import Home from './Home';
import MyCart from './MyCart';
import { useSelector } from 'react-redux';

const Page = () => {
    const pages = useSelector((state) => state.pages);

    return <div>{pages.home ? <Home /> : <MyCart />}</div>;
};

export default Page;
