import Banner from "../components/Banner";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import useTitle from "../hook/useTitle";
import LatestItems from "../components/LatestItems";
import { useLoaderData } from "react-router-dom";
import Guidlines from "../components/Guidlines";
import Community from "../components/Community";

const Home = () => {
      useTitle('Home');
      const [loading, setLoading] = useState(true);
      const items = useLoaderData();

      // loading spinner when dom refresh or render
      useEffect(() => {
            const timeout = setTimeout(() => {
                  setLoading(false)
            }, 1500);
            return () => clearTimeout(timeout);
      }, [])


      return (
            <>
                  {loading
                        ? <Loading />
                        : <>
                              <Banner />
                              <LatestItems items={items} />
                              <Guidlines />
                              <Community />
                        </>}
            </>
      )
}

export default Home