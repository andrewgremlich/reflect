import React from "react";
import ReactSwipe from "react-swipe";
import isMobile from "is-mobile";
import { IconContext } from "react-icons";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

import styles from "./Swiper.module.css";

/**
 * Will appear as swipeable blocks on mobile.
 * @param {*} param0
 */
export const Swiper = ({ children }) => {
  const mobile = isMobile();

  let reactSwipeEl;

  return mobile ? (
    <div className={`${styles["swiper-mobile"]}`}>
      <ReactSwipe
        swipeOptions={{ continuous: false }}
        ref={(el) => (reactSwipeEl = el)}
      >
        {children}
      </ReactSwipe>
      <IconContext.Provider value={{ size: "48px" }}>
        <div onClick={() => reactSwipeEl.prev()}>
          <FiArrowLeft />
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ size: "48px" }}>
        <div onClick={() => reactSwipeEl.next()}>
          <FiArrowRight />
        </div>
      </IconContext.Provider>
    </div>
  ) : (
    <>{children}</>
  );
};
