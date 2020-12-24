import React, { Fragment, useEffect } from "react";
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
    <Fragment>
      <h1>Group</h1>
      <p>Select the exercise that you want to do.</p>
      {group?.map(({ name }) => (
        <p>{name}</p>
      ))}
    </Fragment>
  );
};
