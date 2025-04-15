import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardItem = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Cards() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="min-h-screen py-20 bg-[url(./assets/cards.svg)] bg-cover"
    >
      <div className="container mx-auto px-4">
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <motion.div
              key={index}
              variants={cardItem}
              className="bg-white p-8 rounded-xl shadow-lg"
              whileHover={{ y: -10 }}
            >
              <h3 className="text-xl font-bold">Card {index + 1}</h3>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
