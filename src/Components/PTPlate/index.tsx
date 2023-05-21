import React, { useEffect, useRef, useState } from "react";
import { Plate, useResetPlateEditor } from "@udecode/plate";
import { MyParagraphElement, MyValue } from "./typescript/plateTypes";

const ResetEditorOnValueChange = ({ value }: { value: MyParagraphElement[] }) => {
  console.log("ResetEditorOnValueChange")
  const resetPlateEditor = useResetPlateEditor();
  const isFirst = useRef(true);
  console.log("isFirst");
  console.log(isFirst);
  useEffect(() => {
    console.log("useEffect");
    console.log(isFirst);
     
    if (isFirst.current) {
      console.log("isFirst.current");
      console.log(isFirst);  
      isFirst.current = false;
      return;
    }
    resetPlateEditor();
  }, [value, resetPlateEditor]);
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
  const [debugValue, setDebugValue] = useState<MyParagraphElement[]>(propValue);

  useEffect(() => {
    console.log("XXXXXXXXX");
    setDebugValue(propValue);
  }, [propValue]);

  return (
    <div>
      <Plate<MyParagraphElement[]> editableProps={{ placeholder: "Type…" }} value={debugValue}>
        <ResetEditorOnValueChange value={debugValue} />
      </Plate>
      {/* <span>Plate content:</span>
      <span>{JSON.stringify(content)}</span> */}
    </div>
  );
}

export default PTPlate;
