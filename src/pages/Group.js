import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getSelectedGroup, getGroup } from "../features/Viewer/Viewer.slice";

import { Swiper, SwiperSlide } from "swiper/react";

/**
 * Exercise group page to see the exercises in a group.
 */
export const Group = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [, groupNameValue] = location.search.split("=");
  const group = useSelector(getSelectedGroup);

  const groupNameDecoded = decodeURI(groupNameValue);

  useEffect(() => {
    if (!group) {
      dispatch(getGroup(groupNameDecoded));
    }
  }, [dispatch, group, groupNameDecoded]);

  return group ? (
    <Swiper>
      {group?.map(({ name, id }) => (
        <SwiperSlide key={id}>
          <div className="detail-block flex-center">
            <h2>{name}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <h2>No group data... :(</h2>
  );
};
