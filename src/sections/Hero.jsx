import React from "react";
import main from "../assets/main.jpg";
import { motion } from "framer-motion";
import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="h-[100vh] flex items-center bg-[url(./assets/bg.svg)] bg-cover ">
      <div className="lg:container mx-auto px-4 flex sm:flex-row flex-col items-center ">
        <motion.div
          className="w-full sm:w-2/3 md:w-2/4 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -bottom-20 -left-20 w-64 z-0 h-64 bg-secondary/20 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/3 right-20 w-96 z-0 h-96 bg-tertiary/20 rounded-full filter blur-3xl"></div>
          <motion.div
            className="absolute top-20 right-20 w-16 h-16 z-0 bg-secondary rounded-full mb-10"
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
          <h1 className="text-4xl sm:text-6xl font-black text-shadow-tertiary text-shadow-sm z-10 relative mb-5">
            We create effective <span className="text-secondary">websites</span>{" "}
            for your business
          </h1>
          <Button variant="long" text={"Learn more"} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full sm:w-1/3 md:w-2/4 pt-3 pl-2 bg-secondary/70 rounded-2xl mt-10 sm:mt-0"
        >
          <img src={main} alt="main-image" className="rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
