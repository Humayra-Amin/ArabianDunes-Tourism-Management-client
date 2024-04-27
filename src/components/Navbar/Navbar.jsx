import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    const links = <>
        <li><NavLink to="/" className={({ isActive }) =>
            isActive ? 'text-black border-2 border-[#5c4d16]' : 'text-black'}>Home</NavLink></li>
        <li><NavLink to="/aboutUs" className={({ isActive }) =>
            isActive ? 'text-black border-2 border-[#5c4d16]' : 'text-black'}>About</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) =>
            isActive ? 'text-black border-2 border-[#5c4d16]' : 'text-black'}>Contact</NavLink></li>
        {/* <li><NavLink to="/login" className={({ isActive }) =>
            isActive ? 'text-black border-2 border-[#5c4d16]' : 'text-black'}>Login</NavLink></li>
        <li><NavLink to="/register" className={({ isActive }) =>
            isActive ? 'text-black border-2 border-[#5c4d16]' : 'text-black'}>Register</NavLink></li> */}
        <li><NavLink to="/addSpot" className={({ isActive }) =>
            isActive ? 'text-black border-2 border-[#5c4d16]' : 'text-black'}>Add Tourists Spot</NavLink></li>
        <li><NavLink to="/list" className={({ isActive }) =>
            isActive ? 'text-black border-2 border-[#5c4d16]' : 'text-black'}>My List</NavLink></li>
    </>

    return (
        <div className="mx-auto">
            <div className="navbar bg-[#FACF39] shadow-lg shadow-yellow-500 border">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>

                    <div className="flex-1">
                        <Link to='/'><img src={logo} alt="" className=" ml-2 w-[80px] h-[80px] lg:ml-14 lg:w-[100px] lg:h-[95px] md:w-[100px] md:h-[80px]" /></Link>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 lg:gap-2 lg:mr-[280px] lg:text-[18px]">
                        {links}
                    </ul>
                </div>
                {/* <div className="flex-none gap-2">

                </div> */}

            </div>
        </div>
    );
};

export default Navbar;