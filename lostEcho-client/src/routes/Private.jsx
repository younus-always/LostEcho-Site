import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";

const Private = ({ children }) => {
      const { user, loading } = useContext(AuthContext);
      const location = useLocation();

      if (loading) {
            return <Loading />
      };

      if (user && user.email) {
            return children;
      };

      return <Navigate state={location.pathname} to='/signin'></Navigate>

}

export default Private;