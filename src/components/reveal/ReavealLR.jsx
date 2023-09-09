import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

function ReavealLR({ children, width = "fit-content" }) {
  const animate = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate.start("visible");
    }
  }, [animate,isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{ hidden: { opacity: 0, x: 75 }, visible: { opacity: 1, x: 0 } }}
      initial={"hidden"}
      animate={animate}
      transition={{ delay: 0.25, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default ReavealLR;
