import axios from "axios"
import { useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
      baseURL: `${import.meta.env.VITE_URL}`,
      withCredentials: true
})
const useAxios = () => {
      const { logout } = useContext(AuthContext);
      const navigate = useNavigate();

      useEffect(() => {
            axiosInstance.interceptors.response.use(response => {
                  return response;
            }, error => {
                  if (error.status === 401 || error.status === 403) {
                        logout()
                              .then(() => {
                                    navigate("/signin")
                              })
                              .catch(err => console.log(err))
                  }
                  return Promise.reject(error)
            })
      }, [])
      return axiosInstance;
}

export default useAxios