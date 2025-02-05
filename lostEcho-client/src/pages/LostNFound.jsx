import Lottie from "lottie-react";
import { useLoaderData } from "react-router-dom";
import notFound from "../lotties/data-not-found.json"
import Card from "../components/Card";
import { useEffect, useRef, useState } from "react";
import Loading from "../components/Loading";
import useTitle from "../hook/useTitle";
import axios from "axios";

const LostNFound = () => {
      useTitle("Lost and Found");
      const data = useLoaderData();
      const [loading, setLoading] = useState(true);
      const inputRef = useRef(null);
      const [items, setItems] = useState([]);
      const [searchTerm, setSearchTerm] = useState("");
      const [filteredItems, setFilteredItems] = useState(data);
      const searchText = items.filter(item => item.title || item.location)


      // loading spinner when dom refresh or render
      useEffect(() => {
            const timeout = setTimeout(() => {
                  setLoading(false)
            }, 1500);
            return () => clearTimeout(timeout);
      }, [])

      // Search data loaded and store
      useEffect(() => {
            axios.get(`${import.meta.env.VITE_URL}/items?search=${searchTerm}`)
                  .then(res => {
                        setItems(res.data)
                  }).catch(error => console.log(error))
      }, [searchTerm, setItems])

      // Search input value toLowerCase to UI data changes
      useEffect(() => {
            if (searchTerm == "") {
                  setFilteredItems(data)
            } else {
                  const result = data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.location.toLowerCase().includes(searchTerm.toLowerCase()));
                  setFilteredItems(result);
            }
      }, [data, searchTerm])


      return (

            <section className="w-11/12 md:w-10/12 mx-auto py-6">

                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
                        <div className="text-center md:col-span-1">
                              <h3 className="text-xl font-semibold">Total Item : {items.length}</h3>
                        </div>
                        <div className="flex items-center max-w-sm mx-auto md:max-w-full relative md:col-span-2">
                              <div className="relative w-full">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                                          </svg>
                                    </div>
                                    <input type="text"
                                          ref={inputRef}
                                          value={searchTerm}
                                          onChange={(e) => setSearchTerm(e.target.value)}
                                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Search by title or location" />
                              </div>
                              <button onClick={() => inputRef.current.focus()} className="p-3 ms-2 text-sm font-medium text-white hover:bg-blue-600 bg-blue-700 rounded-lg">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                              </button>

                              {searchText.length > 0 &&
                                    <ul className={`${searchTerm.length > 0 ? "p-5" : "p-0"} w-full max-w-[350px] bg-white shadow-lg text-slate-800 rounded absolute top-12 left-0`}>
                                          {searchText.map((item, idx) => {
                                                const matchTitle = item.title.toLowerCase().includes(searchTerm.toLowerCase());
                                                const matchLocation = item.location.toLowerCase().includes(searchTerm.toLowerCase());
                                                return <>
                                                      {searchTerm && (<li key={idx}> {
                                                            matchTitle
                                                                  ? item.title
                                                                  : matchLocation
                                                                        ? item.location
                                                                        : ""
                                                      }</li>)}
                                                </>
                                          })}
                                    </ul>
                              }
                        </div>

                  </div>


                  {
                        loading
                              ? (<Loading />)
                              :
                              filteredItems.length > 0
                                    ? (<div className="w-11/12 sm:w-8/12 md:w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-14">
                                          {filteredItems.map((item, idx) => <Card key={idx} item={item} />)}
                                    </div>)
                                    : (<div className="flex items-center justify-center">
                                          <Lottie animationData={notFound} className="w-52"></Lottie>
                                    </div>)
                  }
            </section>

      )
}
export default LostNFound