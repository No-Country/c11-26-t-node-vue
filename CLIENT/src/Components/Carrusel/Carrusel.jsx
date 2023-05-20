import "./Carrusel.css";
import Images from "../../../assets/export/images";
import { motion } from "framer-motion";

const Carrusel = () => {
  return (
    <motion.div className="sliderContainer">
      <motion.div
        className="slider"
        drag="x"
        dragConstraints={{ right: 0, left: -2650 }}
      >
        {Images.map((image) => (
          <motion.div className="item">
            <img className="imgSlider" src={image} alt="" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Carrusel;
