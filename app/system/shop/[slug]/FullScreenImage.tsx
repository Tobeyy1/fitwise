import React from "react";
import classes from "./ItemDisplay.module.scss";
import Image, { StaticImageData } from "next/image";
import { BsFullscreenExit } from "react-icons/bs";
import { motion } from "framer-motion";
interface Props {
  imageSrc: StaticImageData;
  onExit: () => void;
}

const FullScreenImage: React.FC<Props> = ({ imageSrc, onExit }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween" }}
      className={classes.fullscreen__container}
    >
      <div className={classes.exit__full__screen} onClick={onExit}>
        <span className={classes.icon}>
          {" "}
          <BsFullscreenExit />
        </span>{" "}
        <p>Exit Full Screen</p>
      </div>
      <Image src={imageSrc} alt="Item" fill className={classes.image} />
    </motion.div>
  );
};

export default FullScreenImage;
