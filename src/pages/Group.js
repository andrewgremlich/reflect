import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getSelectedGroup, getGroup } from "../features/Viewer/Viewer.slice";

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

  return (
    <main>
      {group?.map(({ name }) => (
        <h2 className="detail-block">{name}</h2>
      ))}
    </main>
  );
};
