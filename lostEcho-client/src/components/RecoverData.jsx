import Lottie from "lottie-react";
import notFound from "../lotties/data-not-found.json";

const RecoverData = ({ data }) => {

      return (
            <section className="w-11/12 md:w-10/12 mx-auto py-6 pb-12">

                  {data.length > 0
                        ? <div className="relative max-w-6xl mx-auto overflow-x-auto shadow sm:rounded-lg">
                              <table className="w-full text-sm text-left rtl:text-right text-gray-800 font-semibold">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-300">
                                          <tr>
                                                <th scope="col" className="px-6 py-3">
                                                      Title
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                      Type
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                      Category
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                      Location
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                      Date
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                      Message
                                                </th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {
                                                data.map(d => <tr key={d._id} className="bg-white border-b hover:bg-gray-100">
                                                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                            {d.title}
                                                      </th>
                                                      <td className="px-6 py-4">
                                                            {d.type}
                                                      </td>
                                                      <td className="px-6 py-4">
                                                            {d.category}
                                                      </td>
                                                      <td className="px-6 py-4">
                                                            {d.recoveredLocation}
                                                      </td>
                                                      <td className="px-6 py-4">
                                                            {d.recoveredDate}
                                                      </td>
                                                      <td className="px-6 py-4">
                                                            {d.message.length > 60 ? d.message.substring(0, 60) + '...' : d.message}
                                                      </td>
                                                </tr>)
                                          }
                                    </tbody>
                              </table>
                        </div>
                        : <div className="flex items-center justify-center">
                              <Lottie animationData={notFound} className="w-52"></Lottie>
                        </div>}

            </section>
      )
}

export default RecoverData