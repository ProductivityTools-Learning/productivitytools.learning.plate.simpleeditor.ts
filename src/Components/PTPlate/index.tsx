import React from "react";
import { Plate, TEditableProps } from "@udecode/plate";

function PTPlate() {
  const editableProps: TEditableProps = {
    placeholder: "Type...",
  };
  return <Plate editableProps={editableProps}></Plate>;
}

export default PTPlate;
