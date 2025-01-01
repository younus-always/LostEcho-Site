import { motion } from "motion/react"

const Community = () => {

      return (
            <section className="bg-gray-100 py-16">
                  <div className="container mx-auto px-6">
                        {/* <!-- Title and Subtitle --> */}
                        <div className="text-center mb-12">
                              <h2 className="text-3xl font-bold text-gray-800">Real Stories from Our Community</h2>
                              <p className="text-gray-600 mt-4">
                                    See how LostEcho is helping people reconnect with their lost belongings every day.
                              </p>
                        </div>

                        {/* <!-- Success Stories and Stats --> */}
                        <div className="w-10/12 mx-auto sm:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                              {/* <!-- Single Success Story Card --> */}
                              <div className="bg-white shadow-lg rounded-lg p-6">
                                    <img src="https://img.freepik.com/free-photo/business-concept-smiling-thoughtful-handsome-man-standing-white-isolated-background-touching-his-chin-with-hand_1258-80750.jpg?uid=R170017612&ga=GA1.1.70706524.1730171181&semt=ais_hybrid" alt="John's Success Story" className="w-full h-44 lg:h-48 object-cover rounded-md" />
                                    <h3 className="text-xl font-semibold mt-4 text-gray-700">John's Reunion</h3>
                                    <p className="text-gray-600 mt-2 text-sm">
                                          "Thanks to LostEcho, I found my lost wallet in just a few days!"
                                    </p>
                              </div>

                              <div className="bg-white shadow-lg rounded-lg p-6">
                                    <img src="https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg?uid=R170017612&ga=GA1.1.70706524.1730171181&semt=ais_hybrid"
                                          alt="Sarah's Success Story" className="w-full h-44 lg:h-48 object-cover rounded-md" />
                                    <h3 className="text-xl font-semibold mt-4 text-gray-700">Sarah's Experience</h3>
                                    <p className="text-gray-600 mt-2 text-sm">
                                          "I recovered my phone after losing it at the park. This platform is amazing!"
                                    </p>
                              </div>

                              <div className="bg-white shadow-lg rounded-lg p-6">
                                    <img src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?uid=R170017612&ga=GA1.1.70706524.1730171181&semt=ais_hybrid" alt="Mike's Success Story" className="w-full h-44 lg:h-48 object-cover rounded-md" />
                                    <h3 className="text-xl font-semibold mt-4 text-gray-700">Mike's Story</h3>
                                    <p className="text-gray-600 mt-2 text-sm">
                                          "Found and returned a set of car keys. The owner was so grateful!"
                                    </p>
                              </div>
                        </div>

                        {/* <!-- Stats Section --> */}
                        <div className="mt-12 text-center">
                              <p className="text-lg font-semibold text-sky-700">This Month's Stats</p>
                              <div className="flex justify-center gap-16 mt-6">
                                    <div className="text-center">
                                          <p className="text-4xl font-bold text-gray-800">150+</p>
                                          <p className="text-gray-600">Items Returned</p>
                                    </div>
                                    <div className="text-center">
                                          <p className="text-4xl font-bold text-gray-800">1,500+</p>
                                          <p className="text-gray-600">Users Trusted</p>
                                    </div>
                              </div>
                        </div>

                        {/* <!-- Call-to-Action --> */}
                        <div className="text-center mt-12">
                              <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-500">
                                    Share Your Story
                              </motion.button>
                        </div>
                  </div>
            </section>
      )
}

export default Community