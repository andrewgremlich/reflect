import React from "react";
import ReactSwipe from "react-swipe";
import isMobile from "is-mobile";

/**
 * Will appear as swipeable blocks on mobile.
 * @param {*} param0
 */
export const Swiper = ({ children }) => {
  const mobile = isMobile();

  let reactSwipeEl;

  return mobile ? (
    <>
      <ReactSwipe
        swipeOptions={{ continuous: false }}
        ref={(el) => (reactSwipeEl = el)}
      >
        {children}
      </ReactSwipe>
      <button
        className={`button secondary-button`}
        onClick={() => reactSwipeEl.prev()}
      >
        Previous
      </button>
      <button
        className={`button secondary-button`}
        onClick={() => reactSwipeEl.next()}
      >
        Next
      </button>
    </>
  ) : (
    <>{children}</>
  );
};
