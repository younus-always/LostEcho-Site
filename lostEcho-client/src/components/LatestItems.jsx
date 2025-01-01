import { useNavigate } from "react-router-dom";
import Card from "./Card";
import { motion } from "motion/react";

const LatestItems = ({ items }) => {
      const navigate = useNavigate();
      return (
            <section className="w-11/12 md:w-10/12 mx-auto py-10">
                  <div className="text-center py-6">
                        <h2 className="text-2xl lg:text-3xl font-bold">Newest Lost & Found Updates</h2>
                        <p className="text-sm sm:text-base font-semibold pt-2">Explore the most recent items added to our platform.</p>
                  </div>
                  <div>
                        <div className="w-10/12 sm:w-8/12 mx-auto md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                              {items.length > 0 &&
                                    items.map(item => <Card key={item._id} item={item} />)
                              }
                        </div>
                        <div className="pt-8 flex items-center justify-center">
                              <motion.button onClick={() => navigate('/lost&found')}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-white bg-sky-600 hover:bg-sky-500 font-semibold rounded-lg text-sm px-5 py-2.5 uppercase">See More Items</motion.button>
                        </div>
                  </div>
            </section>
      )
}

export default LatestItems