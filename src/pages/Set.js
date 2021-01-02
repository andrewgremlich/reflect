import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getGroup,
  getSelectedSet,
  getSet,
} from "../features/Viewer/Viewer.slice";

import { Swiper } from "../components/Swiper";

/**
 * Set page to see the exercise groups in a set.
 */
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
      {selectedSet ? (
        <Swiper>
          {selectedSet?.exerciseGroups.map((group, index) => (
            <div key={index} onClick={() => dispatch(getGroup(group))}>
              <h2 className="detail-block flex-center">
                <Link to={`/group?groupName=${encodeURI(group)}`}>{group}</Link>
              </h2>
            </div>
          ))}
        </Swiper>
      ) : (
        <h2>No group data...</h2>
      )}
    </main>
  );
};
