import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import notFound from "../lotties/data-not-found.json";
import Lottie from "lottie-react";
import Table from "../components/Table";
import Swal from "sweetalert2";
import Loading from "../components/Loading";
import useTitle from "../hook/useTitle";

const MyItems = () => {
      useTitle("My Items");
      const { user } = useContext(AuthContext)
      const data = useLoaderData();
      const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(true);

      // loading spinner when dom refresh or render
      useEffect(() => {
            const timeout = setTimeout(() => {
                  setLoading(false)
            }, 1000);
            return () => clearTimeout(timeout);
      }, [])

      // filter user own posted data
      useEffect(() => {
            const filterData = data.filter(d => d.email == user.email);
            setProducts(filterData);
      }, [data, user.email])

      // post delete function
      const handleDelete = id => {

            Swal.fire({
                  title: "Are you sure?",
                  text: "You want to delete!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                  if (result.isConfirmed) {
                        fetch(`https://lost-echo-server.vercel.app/item/${id}`, {
                              method: 'DELETE',
                        }).then(res => res.json())
                              .then(data => {
                                    if (data.deletedCount) {
                                          Swal.fire({
                                                title: "Deleted!",
                                                text: "Your data has been deleted.",
                                                icon: "success"
                                          });
                                          const newData = products.filter(p => p._id !== id);
                                          setProducts(newData)
                                    }
                                    else {
                                          Swal.fire({
                                                title: "Error",
                                                text: "Failed to delete the item. Please try again.",
                                                icon: "error",
                                          });
                                    }
                              });
                  };
            });
      };

      return (
            <section className="w-11/12 md:w-10/12 mx-auto py-5">

                  <div className="text-center py-6">
                        <h1 className="text-2xl lg:text-3xl font-bold">Item Management Dashboard</h1>
                        <p className="text-sm sm:text-base font-semibold pt-2">Here’s a list of the items you’ve posted. Manage, update, or remove them as needed.</p>
                  </div>

                  {loading ? <Loading />
                        : (products.length > 0
                              ? <div className="relative max-w-6xl mx-auto overflow-x-auto shadow sm:rounded-lg my-6">
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
                                                      <th scope="col" className="px-6 py-3 text-right pr-14">
                                                            Action
                                                      </th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                {
                                                      products.map(singleProduct => <Table
                                                            key={singleProduct._id}
                                                            singleProduct={singleProduct}
                                                            handleDelete={handleDelete} />)
                                                }
                                          </tbody>
                                    </table>
                              </div>
                              : <div className="flex items-center justify-center">
                                    <Lottie animationData={notFound} className="w-52"></Lottie>
                              </div>)
                  }

            </section>
      )
}

export default MyItems