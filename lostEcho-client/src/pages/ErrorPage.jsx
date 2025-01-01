import Lottie from "lottie-react"
import errr from "../lotties/404.json"
import { Link } from "react-router-dom"
import useTitle from "../hook/useTitle";
const ErrorPage = () => {
      useTitle('Page not found');
      return (
            <div className="h-screen w-full flex flex-col justify-center items-center">
                  <Lottie className="h-[600px]"
                        animationData={errr} loop={true}
                  />
                  <div className="flex items-center gap-4">
                        <Link to='/' className="py-2 px-4 rounded-lg bg-blue-600 text-slate-50 font-semibold">Back to Home</Link>
                        <Link to={-1} className="py-2 px-4 rounded-lg bg-blue-600 text-slate-50 font-semibold">Go back</Link>
                  </div>
            </div>
      )
}

export default ErrorPage