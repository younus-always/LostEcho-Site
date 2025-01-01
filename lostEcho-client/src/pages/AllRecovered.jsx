import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import RecoverCard from "../components/RecoverCard";
import RecoverData from "../components/RecoverData";
import Loading from "../components/Loading";
import useTitle from "../hook/useTitle";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { MdTableRows } from "react-icons/md";

const AllRecovered = () => {
      useTitle('All Recovered Items');
      const data = useLoaderData();
      const [grid, setGrid] = useState(false);
      const [table, setTable] = useState(true);
      const [loading, setLoading] = useState(true);

      // loading spinner when dom refresh or render
      useEffect(() => {
            const timeout = setTimeout(() => {
                  setLoading(false)
            }, 1500);
            return () => clearTimeout(timeout);
      }, [])


      const handleGrid = () => {
            setGrid(true);
            setTable(false);
      };

      const handleTable = () => {
            setTable(true);
            setGrid(false);
      }

      return (
            <>
                  {loading ? (<Loading />)
                        : (<section>
                              <div className="w-11/12 md:w-10/12 mx-auto mt-6 mb-4 bg-gray-100 py-1 px-2 rounded flex items-center justify-between gap-4">
                                    <h3 className="text-sm font-semibold capitalize text-slate-700 ">All lost and found recovered items here...</h3>
                                    <div className="flex items-center justify-end gap-3">
                                          <button onClick={handleTable}>
                                                <MdTableRows size={26}
                                                      className={`${table ? 'text-blue-700' : ""}`} />
                                          </button>
                                          <button onClick={handleGrid}>
                                                <BsGrid3X3GapFill size={22}
                                                      className={`${grid ? 'text-blue-700' : ""}`} />
                                          </button>
                                    </div>
                              </div>
                              {
                                    grid ? <RecoverCard data={data} /> :
                                          table ? <RecoverData data={data} /> : ""
                              }
                        </section>)}

            </>
      )
}

export default AllRecovered