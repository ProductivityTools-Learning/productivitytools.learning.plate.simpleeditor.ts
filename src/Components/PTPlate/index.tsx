import React, { useEffect, useRef, useState } from "react";
import { Plate, useResetPlateEditor } from "@udecode/plate";
import { MyParagraphElement, MyValue } from "./typescript/plateTypes";

const ResetEditorOnValueChange = ({ value }: { value: MyParagraphElement[] }) => {
  console.log("ResetEditorOnValueChange");
  console.log(value);
  debugger;
  const resetPlateEditor = useResetPlateEditor();
  const isFirst = useRef(true);
  console.log("isFirst");
  console.log(isFirst.current);
  useEffect(() => {
    debugger;
    console.log("useEffect");
    console.log(isFirst);

    if (isFirst.current) {
      console.log("isFirst.current");
      console.log(isFirst.current);
      isFirst.current = false;
      return;
    }
    resetPlateEditor();
  }, [value, resetPlateEditor, isFirst]);
  console.log("return null");

  return null;
};

const initialValue = (content: string) => [
  {
    type: "p",
    children: [
      {
        text: content,
      },
    ],
  } as MyParagraphElement,
];

type Props<PTPlateProps> = {
  propValue: MyParagraphElement[];
};

function PTPlate<PTPlateProps>({ propValue }: Props<PTPlateProps>) {
  const [value, setValue] = useState<MyParagraphElement[]>(propValue);
  const [resetValue, setResetValue] = useState<MyParagraphElement[]>(propValue);

  useEffect(() => {
    console.log("XXXXXXXXX");
    setValue(propValue);
    setResetValue(propValue);
  }, [propValue]);

  const change = (e: MyParagraphElement[]) => {
    setValue(e);
  };

  return (
    <div>
      PlateX2
      {/* <Plate<MyParagraphElement[]> editableProps={{ placeholder: "Type…" }} value={debugValue}> */}
      <Plate<MyParagraphElement[]> editableProps={{ placeholder: "Type…" }} value={value} onChange={change}>
        <ResetEditorOnValueChange value={resetValue} />
      </Plate>
      {/* <span>Plate content:</span>
      <span>{JSON.stringify(content)}</span> */}
    </div>
  );
}

export default PTPlate;
