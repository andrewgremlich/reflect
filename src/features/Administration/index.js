import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modal } from "../../components/Modal";

import { Submit } from "../../components/Form";

import {
  switchEdit,
  switchNewItem,
  selectEdit,
  selectNewItem,
} from "./Administration.slice";

export const Administration = ({
  name,
  modify,
  create,
  children,
  editData,
}) => {
  const dispatch = useDispatch();

  const isEdit = useSelector(selectEdit);
  const isNewItem = useSelector(selectNewItem);

  const NewForm = React.cloneElement(children);
  const EditForm = React.cloneElement(children, { ...editData });

  return (
    <div>
      <h1>{name}</h1>
      <button
        onClick={() => {
          dispatch(switchNewItem());
        }}
      >
        New {name}
      </button>
      <Modal active={isNewItem} closeModal={() => dispatch(switchNewItem())}>
        <h3>New {name}</h3>
        {NewForm}
        <Submit
          submitter={() => {
            create();
          }}
        />
      </Modal>

      <Modal
        active={isEdit}
        closeModal={() => {
          dispatch(switchEdit());
        }}
      >
        <h3>Edit {name}</h3>
        {EditForm}
        <Submit
          submitter={() => {
            modify();
            dispatch(switchEdit());
          }}
        />
      </Modal>
    </div>
  );
};
