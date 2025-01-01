import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import login from "../lotties/login.json";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import useTitle from "../hook/useTitle";

const SignIn = () => {
      useTitle("Sign in");
      const { signin, googleSignin, setUser } = useContext(AuthContext);
      const [showPassword, setShowPassword] = useState(false);
      const location = useLocation();
      const navigate = useNavigate();

      const handleSubmit = e => {
            e.preventDefault();
            const form = new FormData(e.target);
            const email = form.get('email');
            const password = form.get('password');

            signin(email, password)
                  .then(userCredential => {
                        const userInfo = userCredential.user;
                        setUser(userInfo);
                        toast.success("Login success");
                        setTimeout(() => {
                              navigate(location?.state ? location.state : '/')
                        }, 2000);
                  })
                  .catch(error => {
                        toast.error("Invalid email or password!")
                        console.log(error)
                  })
      }

      const googleLogin = () => {
            googleSignin()
                  .then(result => {
                        const userInfo = result.user;
                        setUser(userInfo);
                        toast.success("Login success");
                        setTimeout(() => {
                              navigate(location?.state ? location.state : '/')
                        }, 2000);
                  })
                  .then(error => {
                        console.log(error)
                  })
      }


      return (
            <section className="w-11/12 md:w-10/12 mx-auto flex flex-col-reverse lg:flex-row items-center lg:justify-between pb-6">
                  <div className="max-w-md p-6 border-2 rounded-lg w-full lg:flex-1">
                        <h2 className="pb-4 text-2xl font-bold text-center">Login</h2>
                        <form onSubmit={handleSubmit} >
                              <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@lostecho.com" required />
                              </div>
                              <div className="mb-5 relative">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type={showPassword ? 'text' : 'password'} name="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="••••••••" required />
                                    <button onClick={() => setShowPassword(!showPassword)} className="rounded-full p-1 absolute right-2 top-1/2">
                                          {showPassword
                                                ? <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="22" fill="none" viewBox="0 0 24 24">
                                                      <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                                                      <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                                : <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="22" fill="none" viewBox="0 0 24 24">
                                                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>

                                          }

                                    </button>
                              </div>
                              <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center group">
                                    <div className="flex items-center justify-center gap-2">
                                          <span>Login</span>
                                          <svg className="w-5 h-5 text-white mt-[3px] group-hover:pl-1 transition-all ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2" />
                                          </svg>
                                    </div>
                              </button>
                        </form>
                        <div>
                              <p className="text-gray-600 font-semibold text-sm text-center py-3">Don't have an account? <Link to='/signup' className="text-blue-600 font-bold">Signup</Link></p>
                        </div>
                        <div className="divider py-3">OR</div>
                        <button onClick={googleLogin} className="w-full flex items-center justify-center gap-4 bg-gray-100 border border-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 shadow">
                              <FcGoogle size={22} /> <span>Sign in with Google</span>
                        </button>
                  </div>
                  <Lottie className="max-w-xl lg:flex-1" animationData={login}></Lottie>
            </section>
      )
}

export default SignIn