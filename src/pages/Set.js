import React, { Fragment, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getGroup,
  getSelectedSet,
  getSet,
} from "../features/Viewer/Viewer.slice";

export const Set = () => {
  const { id: setId } = useParams();

  const dispatch = useDispatch();

  const selectedSet = useSelector(getSelectedSet);

  useEffect(() => {
    if (!selectedSet || setId !== selectedSet.id) {
      dispatch(getSet(setId));
    }
  }, [dispatch, selectedSet, setId]);

  return (
    <Fragment>
      <h1>{selectedSet?.name}</h1>
      {selectedSet?.exerciseGroups.map((group, index) => (
        <p onClick={() => dispatch(getGroup(group))} key={index}>
          <Link to={`/group?groupName=${encodeURI(group)}`}>{group}</Link>
        </p>
      ))}
    </Fragment>
  );
};
