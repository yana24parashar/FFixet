import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import EarthCanvas from "./Earth";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants/index";
import { SectionWrapper } from "../hoc/Index";
import { slideIn } from "../utils/motion";
import Test from "./Test";
import StarsCanvas from "./Stars";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full violet-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[300px] flex       justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-38 h-36 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <StarsCanvas />
      <div className=" grid justify-items-center my-10">
        <div className="justify-items-center text-center">
          <motion.div variants={textVariant()}>
            <h1 className="md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-bold text-transparent bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-600 bg-clip-text text-shadow: 0 0 2px #000">
              FFixet.
            </h1>
          </motion.div>
        </div>
        <div
          className={`xl:mt-12 flex xl:flex-row-reverse flex-col-reverse gap-10 overflow-hidden`}
        >
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
          >
            <EarthCanvas />
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary text-[20px] max-w-4xl leading-[40px]"
          >
            Physical Health Connection: Mental health and physical health are
            interconnected. Poor mental health can negatively impact physical
            health, leading to increased risk of various health issues such as
            heart disease, weakened immune system, and chronic conditions like
            diabetes. Conversely, maintaining good mental health can contribute
            to better physical health outcomes.Emotional Resilience: Good mental
            health equips individuals with the tools to cope with life's
            challenges, setbacks, and stressors. It fosters emotional
            resilience, allowing individuals to bounce back from adversity,
            maintain a sense of balance, and navigate life's ups and downs more
            effectively.Quality of Life: Mental health influences every aspect
            of life, from relationships and work to leisure activities and
            overall satisfaction.
          </motion.p>
        </div>
        <div className="mx-20 mt-20 flex gap-10">
          {services.map((service, index) => (
            <div>
              <a href={service.link}>
                <ServiceCard key={service.title} index={index} {...service} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary text-[20px] max-w-4xl leading-[40px]"
      ></motion.p>
      <Test />
    </>
  );
};

export default SectionWrapper(About, "about");
