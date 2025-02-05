import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Card = ({ item }) => {
      const { _id, name, title, type, thumbnail, location, message } = item || {};
      
      return (
            <>
                  <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                              duration: 0.5,
                              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                        className="flex flex-col justify-between overflow-hidden bg-white border border-gray-200 rounded-lg shadow text-gray-700">
                        <figure className="h-60">
                              <img className="rounded-t-lg h-full w-full object-cover object-center"
                                    src={
                                          item.thumbnail.startsWith('http')
                                                ? item.thumbnail
                                                : `${import.meta.env.VITE_URL}/uploads/${item.thumbnail}`
                                    } alt={item.title} />
                        </figure>
                        <div className="p-5 pb-0">
                              <div className="flex items-center gap-5">
                                    <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                                    <span className="bg-teal-500 text-slate-50 text-xs font-semibold px-2.5 py-0.5 rounded-xl">{type}</span>
                              </div>
                              <div>
                                    <h3 className="font-semibold">Posted By: <span className="font-bold">{name}</span></h3>
                                    <p className="font-semibold">Location : {location}</p>
                                    <p className="font-medium">{message}</p>
                              </div>
                        </div>
                        <div className="pb-5 px-5 mt-3">
                              <Link to={`/items/${_id}`} className="w-fit flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded hover:bg-cyan-600 group">
                                    View Details
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 group-hover:pl-1 transition-all ease-in-out duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                              </Link>
                        </div>
                  </motion.div>
            </>
      )
}

export default Card