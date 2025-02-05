import { useContext, useState, useTransition } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useTitle from "../hook/useTitle";
import axios from "axios";

const AddLostNFound = () => {
      useTitle('Add Lost and Found Item');
      const { user } = useContext(AuthContext);
      const [setDate, setStartDate] = useState(new Date());
      const navigate = useNavigate();

      const handlePost = e => {
            e.preventDefault();
            const form = new FormData(e.target);
            const title = form.get("title");
            const thumbnail = form.get("thumbnail");
            const type = form.get("type");
            const category = form.get("category");
            const location = form.get("location");
            const date = form.get("date");
            const message = form.get("message");
            const { displayName: name, email } = user;
            let status = "Uncovered";
            const itemInfo = { name, email, title, thumbnail, type, category, location, date, message, status };

            if (!category) {
                  return toast.warning("Select category!")
            };

            if (!type) {
                  return toast.warning("Select type!")
            };

            if (date > new Date().toLocaleDateString()) {
                  return toast.warning("Future dates are invalid. Please provide the date the item was lost or found!")
            }

            // Post all user items to server
            axios.post(`${import.meta.env.VITE_URL}/addItems`, itemInfo)
                  .then(res => {
                        const result = res.data;
                        if (result.insertedId) {
                              e.target.reset();
                              toast.success("Your data posted successfully!");
                              setTimeout(() => {
                                    navigate('/manageMyItems');
                              }, 2000);
                        };
                  }).catch(error => {
                        console.log(error)
                  })

      };

      return (
            <section className="w-11/12 md:w-10/12 mx-auto py-6">
                  <form onSubmit={handlePost} className="max-w-xl mx-auto p-6 border shadow-lg rounded-lg">
                        <h3 className="text-center text-xl font-bold pb-5">Submit Your Lost or Found Item</h3>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                              {/* Name */}
                              <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                    <input type="text" id="name" value={user.displayName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled />
                              </div>
                              {/* Email */}
                              <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                    <input type="email" id="email" value={user.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled />
                              </div>
                              {/* Title */}
                              <div>
                                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                    <input type="text" id="title" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="title" required />
                              </div>
                              {/* Thumbnail */}
                              <div>
                                    <label htmlFor="thumbnail" className="block mb-2 text-sm font-medium text-gray-900">Image URL</label>
                                    <input type="text"
                                          id="thumbnail"
                                          name="thumbnail"
                                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="https://images.pexels.com/photos/1108099/pexels-photo" required />
                              </div>

                              {/* {className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"} */}

                              {/* Category */}
                              <div>
                                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Category</label>
                                    <select id="category" name="category" defaultValue="Select category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                                          <option disabled>Select category</option>
                                          <option value="pets">Pets</option>
                                          <option value="documents">Documents</option>
                                          <option value="gadgets">Gadgets</option>
                                          <option value="Vehicles & Accessories">Vehicles & Accessories</option>
                                          <option value="Home Appliances">Home Appliances</option>
                                    </select>
                              </div>
                              {/* Post type */}
                              <div>
                                    <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900">Post Type</label>
                                    <select id="type" name="type" defaultValue="Select type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                                          <option disabled>Select type</option>
                                          <option value="Lost">Lost</option>
                                          <option value="Found">Found</option>
                                    </select>
                              </div>
                              {/* Date */}
                              <div className="">
                                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Date</label>
                                    <div className="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 rounded-lg block w-full p-1">
                                          <DatePicker
                                                id="date"
                                                name="date"
                                                selected={setDate}
                                                onChange={(date) => setStartDate(date)}
                                                className="max-w-full text-sm bg-transparent border-none focus:outline-none focus:border-none"
                                                required
                                          />
                                    </div>
                              </div>

                              {/* Location */}
                              <div>
                                    <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900">Location</label>
                                    <input type="text" id="location" name="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="location" required />
                              </div>
                        </div>
                        {/* Message */}
                        <div className="mb-5">
                              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                              <textarea id="message" name="message" rows="4" className="block p-2.5 w-full max-h-52 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="write your message here..." required></textarea>
                        </div>

                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add Post</button>
                  </form>

            </section>
      )
}

export default AddLostNFound