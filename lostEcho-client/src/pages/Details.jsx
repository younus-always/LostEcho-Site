import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import useTitle from "../hook/useTitle";
import DatePicker from "react-datepicker";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Modal } from "flowbite-react";

const Details = () => {
      useTitle('Item Details');
      const { user } = useContext(AuthContext);
      const { id } = useParams();
      const navigate = useNavigate();
      const [detailData, setDetailData] = useState({});
      const [loading, setLoading] = useState(true);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [recoveredLocation, setRecoveredLocation] = useState("");
      const [recoverDate, setRecoverDate] = useState(new Date());
      const { _id, name, email, title, type, date: actualDate, location, message, category, thumbnail, status: actualStatus } = detailData || {};


      // loading spinner when dom refresh or render
      useEffect(() => {
            const timeout = setTimeout(() => {
                  setLoading(false)
            }, 1000);
            return () => clearTimeout(timeout);
      }, [])

      // load all posted Items
      useEffect(() => {
            axios.get('https://lost-echo-server.vercel.app/allItems')
                  .then(res => {
                        const result = res.data.find(d => d._id === id);
                        setDetailData(result);
                  })
                  .catch(error => console.log(error))
      }, [])

      const handleRecovered = () => {
            const { displayName: name, email, photoURL: photo } = user;
            const recoveredBy = { name, email, photo };
            const recoveredDate = new Date(recoverDate).toLocaleDateString();

            // status check is already recovered
            if (actualStatus === "Recovered") {
                  toast.error("This item is already Recovered!");
                  setTimeout(() => {
                        setIsModalOpen(false)
                  }, 1500);
                  return
            }

            // recovered location field
            if (!recoveredLocation) {
                  return toast.warning("Recovered location expected!");
            }

            // Date verify checking
            if (actualDate > new Date(recoverDate).toLocaleDateString() || new Date().toLocaleDateString() < new Date(recoverDate).toLocaleDateString()) {
                  return toast.warning("Recovered Date Invalid!")
            }

            setRecoveredLocation("");

            const status = "Recovered";
            const itemInfo = { recoveredBy, title, thumbnail, type, category, message, recoveredDate, recoveredLocation, status };


            axios.patch(`https://lost-echo-server.vercel.app/allItems/${_id}`, { status: status })
                  .then(res => {
                  }).catch(error => console.log(error))

            // Recovered data post to server & store recovered collection
            axios.post("https://lost-echo-server.vercel.app/allRecovered", itemInfo)
                  .then(res => {
                        const result = res.data;
                        if (result.insertedId) {
                              setIsModalOpen(false)
                              toast.success("Item Recovered Successfully!")
                              setTimeout(() => {
                                    navigate('/allRecoveredItems')
                              }, 1500);
                        }
                  }).catch(error => console.log(error))
      }


      return (
            <section className="w-11/12 md:w-10/12 mx-auto py-6">

                  {loading ? <Loading />
                        : <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl">
                              <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg" src={thumbnail} alt={title} />
                              <div className="flex flex-col justify-between p-4 leading-normal">
                                    <div className="flex items-center gap-5">
                                          <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                                          <span className="bg-teal-500 text-slate-50 text-xs font-semibold px-2.5 pt-px pb-0.5 rounded-lg">{actualStatus === "Recovered" ? "Recovered" : type}</span>
                                    </div>
                                    <div>
                                          <h3 className="font-medium">Posted by : <span className="font-bold">{name}</span></h3>
                                          <p className="font-semibold">Category : {category}</p>
                                          <p className="font-semibold">Date : {actualDate}</p>
                                          <p className="font-semibold">Location : {location}</p>
                                          <p className="font-medium text-gray-700">{message}</p>
                                    </div>

                                    {/* Conditional Button */}
                                    <div className="mt-3">
                                          {
                                                type === "Lost"
                                                      ? <button onClick={() => setIsModalOpen(true)} type="button" className="text-white bg-cyan-700 rounded hover:bg-cyan-600 font-medium text-sm px-5 py-2.5">Found This</button>
                                                      : <button onClick={() => setIsModalOpen(true)} type="button" className="text-white bg-cyan-700 rounded hover:bg-cyan-600 font-medium text-sm px-5 py-2.5">This is Mine</button>
                                          }
                                    </div>
                              </div>

                              {/* Modal for Recovery Details */}
                              <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}
                                    className="w-10/12 mx-auto shadow-2xl shadow-slate-800">
                                    <Modal.Header>Recover This Item</Modal.Header>
                                    <Modal.Body>
                                          <div className="space-y-4">
                                                {/* Recovered Location */}
                                                <div>
                                                      <label htmlFor="recoveredLocation" className="block text-sm font-medium">
                                                            Recovered Location
                                                      </label>
                                                      <input
                                                            type="text"
                                                            id="recoveredLocation"
                                                            value={recoveredLocation}
                                                            onChange={(e) => setRecoveredLocation(e.target.value)}
                                                            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                                                            placeholder="Enter the revovered location"
                                                      />
                                                </div>

                                                {/* Recovery Date */}
                                                <div>
                                                      <label htmlFor="recoveredDate" className="block text-sm font-medium">
                                                            Date Recovered
                                                      </label>
                                                      <DatePicker
                                                            selected={recoverDate}
                                                            onChange={(date) => setRecoverDate(date)}
                                                            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                                                            placeholderText="Select the date"
                                                      />
                                                </div>

                                                {/* Recovered Person Info */}
                                                <div className="space-y-2">
                                                      <div className="flex items-center gap-4">
                                                            <img
                                                                  src={user.photoURL}
                                                                  alt="User Avatar"
                                                                  className="w-10 h-10 rounded-full object-cover ring-4 ring-teal-500"
                                                            />
                                                            <div>
                                                                  <div className="font-semibold">{user.displayName}</div>
                                                                  <div className="text-sm text-gray-700">{user.email}</div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                          <button
                                                onClick={handleRecovered}
                                                className="bg-green-500 text-white hover:bg-green-600 font-medium text-sm px-5 py-2.5 rounded">
                                                Submit
                                          </button>
                                          <button
                                                onClick={() => setIsModalOpen(false)}
                                                className="bg-red-500 text-slate-50 hover:bg-red-600 font-medium text-sm px-5 py-2.5 rounded">
                                                Close
                                          </button>
                                    </Modal.Footer>
                              </Modal>
                        </div>}

            </section>
      )
}

export default Details