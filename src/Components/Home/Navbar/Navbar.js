import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import menulogo from '../../../Asset/logos/logo.png'
import auth from '../../../firebase.init';


const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/portfolio">Portfolio </Link></li>
        {/* {
            user && <Link to="/dashboard"> <button className="btn btn-ghost">Dashboard</button></Link>
        } */}
        {user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button>
            : <button className="btn btn-ghost">  <Link to="/login">Login</Link></button>}
    </>
    return (
        <div className='navbg'>
            <div class="navbar">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content text-black mt-3 p-2 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a class=" normal-case text-black	 text-xl">
                        <img className='w-28 h-12' src={menulogo} alt="" />
                    </a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal text-black	 p-0">
                        {menuItems}
                    </ul>
                </div>
                <div class="navbar-end">
                    <a class="btn btn-ghost normal-case text-black	 text-xl">Get started</a>

                </div>
            </div>
        </div>

    );
};

export default Navbar;