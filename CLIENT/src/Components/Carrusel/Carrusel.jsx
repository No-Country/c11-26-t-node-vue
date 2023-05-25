import "../../App.less";
import Images from "../../../assets/export/images";
import { motion } from "framer-motion";

const Carrusel = () => {
  return (
    <>
      <div className="artistasContainer">
        <img
          className="artistasImg"
          src={"../assets/microfono.svg"}
          alt="Logo microfono"
        />
        <h2 className="artistash2">artistas</h2>
      </div>
      <motion.div className="sliderContainer">
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={{ right: 0, left: -2650 }}
        >
          {Images.map((image, index) => (
            <motion.div className="item" key={index}>
              <img className="imgSlider" src={image} alt="" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Carrusel;
