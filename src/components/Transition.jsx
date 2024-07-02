import styled from "styled-components";
import { motion } from "framer-motion";
export default function Transition() {
  return (
    <div className="fixed z-[999]">
      <SlideIn
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 1,
          ease: [0.33, 1, 0.36, 1],
        }}
      />
      <SlideOut
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 1,
          ease: [0.33, 1, 0.36, 1],
        }}
        onAnimationComplete={() => document.body.removeAttribute("style")}
      />
    </div>
  );
}

const SlideIn = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  transform-origin: bottom;
  background-color: #1f2937;
`;
const SlideOut = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  transform-origin: top;
  background-color: #1f2937;
`;
