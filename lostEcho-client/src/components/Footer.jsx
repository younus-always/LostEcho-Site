import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const Footer = () => {
      return (
            <>
                  <footer className="bg-slate-900 text-slate-100">
                        <div className="w-11/12 md:w-10/12 mx-auto py-8">
                              <div className="md:flex md:justify-between space-x-4">
                                    <div className="mb-6 md:mb-0">
                                          <Link to="/" className="flex items-center">
                                                <img src={logo} className="h-12 me-3" alt="Logo" />
                                                <span className="self-center text-3xl font-semibold whitespace-nowrap">LostEcho</span>
                                          </Link>
                                    </div>
                                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                                          <div>
                                                <h2 className="mb-6 text-sm font-semibold uppercase">Quick Links</h2>
                                                <ul className="text-gray-400 dark:text-gray-400 font-medium">
                                                      <li className="mb-4">
                                                            <Link to="/" className="hover:underline">Home</Link>
                                                      </li>
                                                      <li>
                                                            <Link to="/lost&found" className="hover:underline">Lost & Found</Link>
                                                      </li>
                                                </ul>
                                          </div>
                                          <div>
                                                <h2 className="mb-6 text-sm font-semibold uppercase">Pages</h2>
                                                <ul className="text-gray-400 dark:text-gray-400 font-medium">
                                                      <li className="mb-4">
                                                            <Link to="/addLost&Found" className="hover:underline ">Add Lost & Found</Link>
                                                      </li>
                                                      <li>
                                                            <Link to="/allRecoveredItems" className="hover:underline">All Recovered Items</Link>
                                                      </li>
                                                </ul>
                                          </div>
                                          <div>
                                                <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
                                                <ul className="text-gray-400 dark:text-gray-400 font-medium">
                                                      <li className="mb-4">
                                                            <Link to="#" className="hover:underline">Privacy Policy</Link>
                                                      </li>
                                                      <li>
                                                            <Link to="#" className="hover:underline">Terms &amp; Conditions</Link>
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                              </div>
                              <hr className="my-6 border-gray-200 sm:mx-auto" />
                              <div className="sm:flex sm:items-center sm:justify-between">
                                    <span className="text-sm text-gray-300 sm:text-center">&copy; {new Date().getFullYear()} <Link to="/" className="hover:underline">LostEcho</Link>. All Rights Reserved.
                                    </span>
                                    <div className="flex mt-4 sm:justify-center">
                                          <Link to="https://www.facebook.com" target="blank" className="text-gray-300">
                                                <FaFacebook />
                                          </Link>
                                          <Link to="https://www.linkedin.com" target="blank" className="text-gray-300 ms-5">
                                                <FaLinkedinIn />
                                          </Link>
                                          <Link to="https://www.twitter.com" target="blank" className="text-gray-300 ms-5">
                                                <FaTwitter />
                                          </Link>
                                          <Link to="https://www.github.com" target="blank" className="text-gray-300 ms-5">
                                                <FaGithub />
                                          </Link>
                                    </div>
                              </div>
                        </div>
                  </footer>
            </>
      )
}

export default Footer