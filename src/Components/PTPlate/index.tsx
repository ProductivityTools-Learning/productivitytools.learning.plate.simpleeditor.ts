import React, { useEffect,useRef, useState } from "react";
import { Plate, TEditableProps, TElement, useResetPlateEditor } from "@udecode/plate";
import { MyParagraphElement, MyValue } from "./typescript/plateTypes";

type Props<PTPlateProps> = {
  content: string;
};

const ResetEditorOnValueChange = ({ value }: { value: string }) => {
  const resetPlateEditor = useResetPlateEditor();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    resetPlateEditor();
  }, [value, resetPlateEditor]);

  return null;
};

const initialValue=(content:string)=>[
  {
    type: "p",
    children: [
      {
        text: content,
      },
    ],
  } as MyParagraphElement,
];

function PTPlate<PTPlateProps>({ content }: Props<PTPlateProps>) {
  const editableProps: TEditableProps = {
    content: "Fdsa",
  };

  const [formatedValue,setFormatedValue]=useState<MyParagraphElement[]>(initialValue(content));

  useEffect(()=>{
    setFormatedValue(initialValue(content));
  },[content])


  return (
    <div>
      <Plate editableProps={editableProps} initialValue={formatedValue} value={formatedValue}>
        <ResetEditorOnValueChange value={content} />
      </Plate>
      <span>{content}</span>
    </div>
  );
}

export default PTPlate;
