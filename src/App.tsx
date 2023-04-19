import React, { ReactElement, useState } from "react";
import PTPlate from "./Components/PTPlate";

function App() {
  const [content, setContent] = useState<string>("initial valueww");

  const getPlate: React.FC<string> = (content: string): ReactElement => {
    console.log("get componetn")
    return <PTPlate content={content}></PTPlate>;
  };
  return (
    <div className="App">
      hello
      <input type="text" onChange={(x) => setContent(x.target.value)}></input>
      <br></br>
      raw content:{content}
      <br></br>
      <span>plate:</span>
      <div>{getPlate(content)}</div>
      <PTPlate content={content}></PTPlate>
    </div>
  );
}

export default App;
