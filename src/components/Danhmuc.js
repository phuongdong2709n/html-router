import React from 'react'
import {  NavLink, Outlet } from 'react-router-dom'

export default function Danhmuc() {
    return (
        <>
            <ul className="category-list">
                <li>
                    <NavLink to={'dienthoai'}>Điện thoại di động</NavLink>
                </li>
                <li>
                    <NavLink to={'dienthoai'}>Máy tính xách tay</NavLink>
                </li>
                <li>
                    <NavLink to={'dienthoai'}>Máy tính bàn</NavLink>
                </li>
                <li>
                    <NavLink to={'dienthoai'}>Đồ gia dụng</NavLink>
                </li>
            </ul>
            <div>
                <Outlet></Outlet>
            </div>
        </>
    )
}
