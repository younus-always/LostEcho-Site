import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navber = () => {
      const { user, logout } = useContext(AuthContext);
      const [isOpen, setIsOpen] = useState(false);
      const [openDropdown, setOpenDropdown] = useState(false);

      return (
            <nav className="bg-slate-900 relative">
                  <div className="w-11/12 md:w-10/12 mx-auto flex flex-wrap items-center justify-between py-4">
                        {/* Brand logo */}
                        <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                              <img src={logo} className="h-8" alt="Flowbite Logo" />
                              <span className="self-center text-slate-50 text-2xl font-semibold whitespace-nowrap">LostEcho</span>
                        </Link>

                        <div className="flex items-center gap-3 md:order-2">
                              {/* user profile photo */}
                              <div className="">
                                    <img type="button" onClick={() => setOpenDropdown(!openDropdown)} className="w-10 h-10 rounded-full object-cover ring-2 cursor-pointer" src={user && user.email ? user.photoURL : avatar} alt="User dropdown" />

                                    {/* User Profile Dropdown menu  */}
                                    {openDropdown &&
                                          <div className={`${openDropdown ? 'block' : 'hidden'} z-50 bg-white divide-y divide-gray-200 rounded-lg w-60 absolute top-16 right-4 shadow-lg`}>
                                                <div className="px-4 py-3 text-sm text-gray-900">
                                                      <div>{user && user.email ? user?.displayName : 'Name'}</div>
                                                      <div className="font-medium truncate">{user && user.email ? user?.email : 'Email'}</div>
                                                </div>
                                                <ul className="py-2 text-sm text-gray-700">
                                                      <li>
                                                            <Link to='/addLost&Found' className="block px-4 py-2 hover:bg-gray-200 font-semibold">Add Lost & Found</Link>
                                                      </li>
                                                      <li>
                                                            <Link to="/allRecoveredItems" className="block px-4 py-2 hover:bg-gray-200 font-semibold">All Recovered Items</Link>
                                                      </li>
                                                      <li>
                                                            <Link to="/manageMyItems" className="block px-4 py-2 hover:bg-gray-200 font-semibold ">My Items</Link>
                                                      </li>
                                                </ul>
                                                <div className="py-1">
                                                      <button onClick={() => logout()} className="w-full px-4 py-2 text-sm text-start text-gray-700 font-semibold hover:bg-gray-200">Sign out</button>
                                                </div>
                                          </div>}
                              </div>

                              {/* Login, Logout & Mobile Menu btn */}
                              <div className="flex space-x-3 md:space-x-0 rtl:space-x-reverse">
                                    {user && user.email
                                          ? <button onClick={() => logout()} className="text-white bg-teal-700 hover:bg-teal-600 font-medium rounded-lg text-sm px-4 py-2 text-center ">Sign out</button>
                                          : <Link to='/signin' className="text-white bg-teal-700 hover:bg-teal-600 font-semibold rounded-lg text-sm px-4 py-2 text-center">Sign in</Link>
                                    }
                                    <button onClick={() => setIsOpen(!isOpen)}
                                          aria-expanded={isOpen ? "true" : "false"}
                                          data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-50 rounded-lg md:hidden bg-teal-700 hover:bg-cyan-500 hover:text-slate-900" aria-controls="navbar-cta">
                                          <span className="sr-only">Open main menu</span>
                                          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                          </svg>
                                    </button>
                              </div>
                        </div>

                        {/* Menu list */}
                        <div className={`items-center justify-between ${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
                              <ul className="flex flex-col font-semibold p-4 gap-2 md:gap-0 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                                    <li>
                                          <NavLink to="/" className="block py-2 px-3 bg-slate-700 md:bg-transparent md:p-0 rounded text-gray-400 md:hover:text-cyan-400">Home</NavLink>
                                    </li>
                                    <li>
                                          <NavLink to="/lost&found" className="block py-2 px-3 bg-slate-700 md:bg-transparent md:p-0 text-gray-400 rounded md:hover:text-cyan-400">Lost&Found</NavLink>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </nav>

      )
}

export default Navber
