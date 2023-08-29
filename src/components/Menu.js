import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
export default function Menu() {
    const activeClass=((isActive)=>{
        return isActive? 'group-item seclectec' : 'group-item'
    })

    const activeStyle=({isActive})=>{
        return {
            backgroundColor:isActive ? 'red': '',
        }
    }
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/trangchu'} className={activeClass} style={activeStyle}>Trang chủ</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/gioithieu'} className={activeClass} style={activeStyle}>Giới thiệu</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/danhmuc'} className={activeClass} style={activeStyle}>Danh mục</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/lienhe'} className={activeClass} style={activeStyle}>Liên hệ</NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
