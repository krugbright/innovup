import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

function Reaveal({ children, width = "fit-content" }) {
  const animate = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate.start("visible");
    }
  }, [animate, isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
      initial={"hidden"}
      animate={animate}
      transition={{ delay: 0.25, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default Reaveal;
