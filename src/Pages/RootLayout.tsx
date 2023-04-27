import React from 'react';
import { Outlet } from "react-router-dom"

const RootLayout = () => {
    return (
        <div className="main">
            <h1 className='title'>Blog Posts</h1>
            <div className='mainTable'>
                <Outlet />
            </div>
        </div>
    )
}


export default RootLayout