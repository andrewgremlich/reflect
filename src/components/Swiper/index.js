import React from "react";
import ReactSwipe from "react-swipe";
import isMobile from "is-mobile";
import { IconContext } from "react-icons";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

import styles from "./Swiper.module.css";

const iconProps = { size: "48px" };

/**
 * Will appear as swipeable blocks on mobile.
 * @param {*} param0
 */
export const Swiper = ({ children }) => {
  const mobile = isMobile();

  let reactSwipeEl;

  return mobile ? (
    <div className={`${styles["swiper-mobile"]}`}>
      <div className={styles.main}>
        <ReactSwipe
          swipeOptions={{ continuous: false }}
          ref={(el) => (reactSwipeEl = el)}
        >
          {children}
        </ReactSwipe>
      </div>
      <div className={styles["back-arrow"]}>
        <IconContext.Provider value={iconProps}>
          <div onClick={() => reactSwipeEl.prev()}>
            <FiArrowLeft />
          </div>
        </IconContext.Provider>
      </div>
      <div className={styles["forward-arrow"]}>
        <IconContext.Provider value={iconProps}>
          <div onClick={() => reactSwipeEl.next()}>
            <FiArrowRight />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
};
