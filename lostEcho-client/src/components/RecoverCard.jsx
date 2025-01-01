import Lottie from "lottie-react";
import notFound from "../lotties/data-not-found.json";

const RecoverCard = ({ data }) => {

      return (
            <>
                  <section className="w-11/12 md:w-10/12 mx-auto py-6 pb-12">
                        {data.length > 0
                              ? <div className="w-11/12 sm:w-8/12 md:w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {data.map(d => <div key={d._id}
                                          className="bg-white border border-gray-200 rounded-lg shadow text-gray-700" >
                                          <figure className="h-60">
                                                <img className="rounded-t-lg h-full w-full object-cover object-center" src={d.thumbnail} alt="" />
                                          </figure>
                                          <div className="p-5">
                                                <div className="flex items-center gap-5">
                                                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{d.title}</h5>
                                                      <span className="bg-teal-500 text-slate-50 text-xs font-semibold px-2.5 py-0.5 rounded-xl">{d.type}</span>
                                                </div>
                                                <div>
                                                      <h3 className="font-semibold">Recovered By : <span className="font-bold">{d.recoveredBy.name}</span></h3>
                                                      <p className="font-medium">Recovered date : <span className="font-semibold">{d.recoveredDate}</span></p>
                                                </div>
                                                <div>
                                                      <p className="font-medium">Recovered location : <span className="font-semibold">{d.recoveredLocation}</span></p>
                                                      <p className="font-medium">{d.message}</p>
                                                </div>
                                          </div>
                                          {/* <div className="pb-5 px-5">
                                                <button className="flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded hover:bg-cyan-600">
                                                      View Details
                                                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                      </svg>
                                                </button>
                                          </div> */}
                                    </div>
                                    )}
                              </div>
                              : <div className="flex items-center justify-center">
                                    <Lottie animationData={notFound} className="w-52"></Lottie>
                              </div>
                        }
                  </section >
            </>
      )
}

export default RecoverCard