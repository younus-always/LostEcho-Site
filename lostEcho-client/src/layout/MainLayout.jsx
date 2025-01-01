import { Outlet } from "react-router-dom"
import Navber from "../components/Navber";
import Footer from "../components/Footer";
import { motion, useScroll, useSpring } from "motion/react";


const MainLayout = () => {
      const { scrollYProgress } = useScroll()
      const scaleX = useSpring(scrollYProgress, {
            stiffness: 100,
            damping: 20,
            restDelta: 0.001,
      })


      return (
            <>
                  <motion.div
                        style={{
                              scaleX,
                              position: "fixed",
                              top: 0,
                              left: 0,
                              right: 0,
                              height: 10,
                              originX: 0,
                              backgroundColor: "#334155",
                        }}
                        className="z-50 relative"
                  />
                  <Navber />
                  <main className="min-h-[calc(100vh-324.8px)] ">
                        <Outlet />
                  </main>
                  <Footer />
            </>
      )
}

export default MainLayout