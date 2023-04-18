import React from "react";
import { Plate, TEditableProps } from "@udecode/plate";

type Props<PTPlateProps> = {
  content: string;
};

function PTPlate<PTPlateProps>({ content }: Props<PTPlateProps>) {
  const editableProps: TEditableProps = {
    placeholder: "Type...",
  };
  return (
    <div>
      <Plate editableProps={editableProps}></Plate>
      <span>{content}</span>
    </div>
  );
}

export default PTPlate;
