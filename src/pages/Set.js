import React, { useEffect } from "react";
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
    <main>
      {selectedSet?.exerciseGroups.map((group, index) => (
        <h2
          className="detail-block"
          onClick={() => dispatch(getGroup(group))}
          key={index}
        >
          <Link to={`/group?groupName=${encodeURI(group)}`}>{group}</Link>
        </h2>
      ))}
    </main>
  );
};
