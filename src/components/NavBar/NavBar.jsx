import React, { useState } from 'react';
import Link from '../Link/Link';
import { CgMenuLeftAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
    const [open,setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Login', path: '/login' }
    ];
    return (
        <nav>
            <div onClick={() => setOpen(!open)} className='text-2xl md:hidden'>
                {
                    open ? <RxCross2></RxCross2> : <CgMenuLeftAlt ></CgMenuLeftAlt>
                }
                
            </div>
            <ul className={`md:flex absolute ${open ? "top-6" : "-top-40"} bg-amber-300 duration-1000 p-5 md:static`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;