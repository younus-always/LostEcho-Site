import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import register from '../lotties/signup.json';
import { AuthContext } from "../Provider/AuthProvider";
import { BiError } from "react-icons/bi";
import Swal from "sweetalert2";
import useTitle from "../hook/useTitle";

const SignUp = () => {
     useTitle("Sign up"); 
      const { signup, updateUserProfile, setUser, logout } = useContext(AuthContext);
      const [showPassword, setShowPassword] = useState(false);
      const navigate = useNavigate();
      const [err, setErr] = useState(null);


      const handleSubmit = e => {
            e.preventDefault();
            const form = new FormData(e.target);
            const name = form.get('name');
            const email = form.get('email');
            const photo = form.get('photo');
            const password = form.get('password');

            // Password validation
            const lowerCase = /^(?=.*[a-z]).*$/;
            const upperCase = /^(?=.*[A-Z]).*$/;
            setErr(null)
            if (password.length < 6) {
                  return setErr('Password must be at least 6 characters long!')
            }
            if (!lowerCase.test(password)) {
                  return setErr('Password must contain at least 1 lowercase letter!')
            }
            if (!upperCase.test(password)) {
                  return setErr('Password must contain at least 1 uppercase letter!')
            }

            signup(email, password)
                  .then(userCredential => {
                        const userInfo = userCredential.user;
                        setUser(userInfo);
                        logout();
                        updateUserProfile(name, photo)
                              .then(() => {
                                    e.target.reset();
                                    Swal.fire({
                                          position: "top-end",
                                          icon: "success",
                                          title: "Registration successful! Log in now to access your account.",
                                          showConfirmButton: false,
                                          timer: 2000
                                    });
                                    navigate('/signIn');
                              })
                  })
                  .catch(error => {
                        console.log(error)
                  })
      }


      return (
            <section className="w-11/12 md:w-10/12 mx-auto flex flex-col-reverse gap-6 lg:flex-row items-center lg:justify-between py-5">
                  <div className="max-w-md p-6 border-2 rounded-lg w-full lg:flex-1">
                        <h2 className="pb-4 text-2xl font-bold text-center">Signup</h2>
                        <form onSubmit={handleSubmit} >
                              <div className="mb-5">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John Doe" required />
                              </div>
                              <div className="mb-5">
                                    <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900">PhotoURL</label>
                                    <input type="text" id="photo" name="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600" required />
                              </div>
                              <div className="mb-5">
                                    <label htmlFor="email" name="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
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
                              {
                                    err && <label className="label">
                                          <p className="text-red-500 flex items-center gap-1 text-sm font-semibold mb-4">
                                                <BiError />
                                                {err}</p>
                                    </label>
                              }
                              <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center group">
                                    <div className="flex items-center justify-center gap-2">
                                          <span>Signup</span>
                                          <svg className="w-5 h-5 text-white mt-[3px] group-hover:pl-1 transition-all ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2" />
                                          </svg>
                                    </div>
                              </button>
                        </form>
                        <div>
                              <p className="text-gray-600 font-semibold text-sm text-center py-3">Already have an account? <Link to='/signin' className="text-blue-600 font-bold">Signin</Link></p>
                        </div>
                  </div>
                  <Lottie className="max-w-xl lg:flex-1" animationData={register}></Lottie>
            </section>
      )
}

export default SignUp